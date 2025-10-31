import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Rocket,
  Cpu,
  PenTool,
  Layers,
  Workflow,
  Zap,
  Brain,
  CheckCircle,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero new-hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              <span className="highlight">AI Metadata Optimizer</span>
            </h1>
            <p className="hero-subtitle">
              Give your books the spotlight they deserve. AI-powered metadata crafted
              for <b>Amazon KDP success</b> — titles, keywords, and categories that sell.
            </p>
            <div className="hero-buttons">
              <button className="cta" onClick={() => navigate("/optimizer")}>
                Optimize My Book
              </button>
              <button className="secondary-btn" onClick={() => navigate("optimizer")}>
                Learn More →
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="ai-bubble bubble1">
              <Sparkles size={22} />
              <p>AI Titles</p>
            </div>
            <div className="ai-bubble bubble2">
              <Layers size={22} />
              <p>Category Match</p>
            </div>
            <div className="ai-bubble bubble3">
              <PenTool size={22} />
              <p>SEO Descriptions</p>
            </div>
            <div className="ai-bubble bubble4">
              <Cpu size={22} />
              <p>Smart Optimization</p>
            </div>
            <div className="ai-core">
              <Rocket size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="workflow-modern">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            In just three simple steps, generate metadata that helps your books rank higher and sell faster.
          </p>
        </div>
        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3><Workflow size={22} /> Enter Your Book Idea</h3>
              <p>Provide a short summary or concept of your book to kickstart the AI engine.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3><Brain size={22} /> Let AI Analyze</h3>
              <p>Featherless AI and LangGraph understand your book’s genre and tone to generate smart metadata.</p>
            </div>
          </div>
          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3><Zap size={22} /> Get Optimized Metadata</h3>
              <p>Receive instantly curated titles, subtitles, keywords, and categories ready for Amazon KDP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-modern">
        <div className="features-inner">
          <div className="feature-illustration">
            <Rocket size={140} className="floating-icon" />
          </div>

          <div className="feature-text">
            <h2>Why Choose MetaGenius?</h2>
            <p className="feature-intro">
              Designed for self-published authors and indie creators. Our smart engine ensures your book stands out in a crowded marketplace.
            </p>
            <ul className="feature-list">
              <li><CheckCircle size={20} /> LangGraph-powered optimization</li>
              <li><CheckCircle size={20} /> AI-tuned titles and subtitles</li>
              <li><CheckCircle size={20} /> Auto category validation for KDP</li>
              <li><CheckCircle size={20} /> SEO-first keyword strategy</li>
            </ul>
            <button className="cta small" onClick={() => navigate("/optimizer")}>
              Try it Now →
            </button>
          </div>
        </div>
      </section>

      {/* MODERN CTA SECTION */}
      <section className="modern-cta">
        <div className="modern-cta-content">
          <h2>Ready to boost your KDP visibility?</h2>
          <p>Start optimizing your metadata and watch your book reach the top charts.</p>
          <button className="cta modern" onClick={() => navigate("/optimizer")}>
            Start Optimizing Now
          </button>
        </div>
      </section>

      {/* MODERN FOOTER */}
      <footer className="modern-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>MetaGenius</h3>
            <p>Smart AI metadata optimization for Amazon KDP authors.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/optimizer">Optimizer</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Github size={20} /></a>
              <a href="mailto:hello@metagenius.ai"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MetaGenius — Built with  using AI</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
