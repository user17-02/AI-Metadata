import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MetadataOptimizer.css";

function MetadataOptimizer() {
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("content");
    const savedMetadata = localStorage.getItem("metadata");
    if (savedContent) setContent(savedContent);
    if (savedMetadata) setMetadata(JSON.parse(savedMetadata));
  }, []);

  useEffect(() => {
    if (content.trim()) localStorage.setItem("content", content);
  }, [content]);

  const handleGenerate = async () => {
    if (!content.trim()) {
      setError("Please enter book content or a draft description!");
      return;
    }
    setLoading(true);
    setMetadata(null);
    setError("");
    try {
      const res = await axios.post("http://127.0.0.1:8000/run-flow", {
        input: content.trim(),
      });
      setMetadata(res.data.result.metadata);
      localStorage.setItem("metadata", JSON.stringify(res.data.result.metadata));
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError(" Error generating metadata. Please check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(" Copied to clipboard!");
  };

  const handleClear = () => {
    setContent("");
    setMetadata(null);
    localStorage.removeItem("content");
    localStorage.removeItem("metadata");
  };

  return (
    <div className="app">
      <h1> AI Metadata Generator</h1>
      <p className="subtitle">
        Generate Amazon KDP–optimized <strong>title</strong>, <strong>keywords</strong>, and <strong>description</strong> instantly.
      </p>

      <textarea
        placeholder="Paste your book content or description here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="button-row">
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? " Optimizing..." : " Generate Metadata"}
        </button>
        <button onClick={handleClear} className="clear-btn">
           Clear
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {metadata && (
        <div className="result">
          <h2> Generated Metadata</h2>

          {metadata.title && (
            <div className="card">
              <h3> Title</h3>
              <p>{metadata.title}</p>
              <button onClick={() => handleCopy(metadata.title)}>Copy</button>
            </div>
          )}

          {metadata.subtitle && (
            <div className="card">
              <h3> Subtitle</h3>
              <p>{metadata.subtitle}</p>
              <button onClick={() => handleCopy(metadata.subtitle)}>Copy</button>
            </div>
          )}

          {metadata.keywords?.length > 0 && (
            <div className="card">
              <h3> Keywords</h3>
              <div className="keywords">
                {metadata.keywords.map((kw, i) => (
                  <span key={i} className="tag">{kw}</span>
                ))}
              </div>
              <button onClick={() => handleCopy(metadata.keywords.join(", "))}>Copy All</button>
            </div>
          )}

          {metadata.categories?.length > 0 && (
            <div className="card">
              <h3> Categories</h3>
              <ul>
                {metadata.categories.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>
              <button onClick={() => handleCopy(metadata.categories.join(", "))}>Copy All</button>
            </div>
          )}

          {metadata.description && (
            <div className="card">
              <h3> Description</h3>
              <p>{metadata.description}</p>
              <button onClick={() => handleCopy(metadata.description)}>Copy</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MetadataOptimizer;
