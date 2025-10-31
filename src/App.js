import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sun, Moon, BookOpen, Home } from "lucide-react";
import HomePage from "./Home";
import MetadataOptimizer from "./MetadataOptimizer";
import metaLogo from "./images/MetaGenius.png";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedMode);
    document.body.classList.toggle("dark-mode", storedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <Router>
      {/*  Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img src={metaLogo} alt="MetaGenius Logo" className="nav-logo" />
        </div>

        <nav className="navbar-links">
          <Link to="/" className="nav-link">
            <Home size={18} /> Home
          </Link>
          <Link to="/optimizer" className="nav-link">
            <BookOpen size={18} /> Optimizer
          </Link>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/*  Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/optimizer" element={<MetadataOptimizer />} />
      </Routes>

      
    </Router>
  );
}

export default App;
