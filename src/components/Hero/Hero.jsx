// src/components/Hero/Hero.jsx
import React from "react";
import "./Hero.css";
import profileImg from "../../assets/Vijeth_Photograph.JPG";
import resumePDF from "../../assets/Vijeth_Resume.pdf"; // Import the resume

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid">
        <div>
          <div className="hero-eyebrow">Available for opportunities</div>
          <h1>
            Hi, I'm<br />
            <span className="outline">Vijeth</span>
          </h1>
          <p className="hero-desc">
            Full-Stack Developer &amp; SQL enthusiast open to jobs and freelance work. 
            I build responsive UIs, robust backends, and write clean, well-tested code. 
            Based in Udupi, Karnataka.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href={resumePDF} download="Vijeth_Resume.pdf" className="btn-outline">
              Download Resume ↓
            </a>
          </div>
          <div className="hero-socials">
            <a 
              href="https://www.linkedin.com/in/vijeth-shetty-334s" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn" 
              title="LinkedIn"
            >
              in
            </a>
            <a 
              href="mailto:vijethshetty334@gmail.com" 
              className="social-btn" 
              title="Email"
            >
              ✉
            </a>
            <a 
              href="https://github.com/vijeth-s" 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn" 
              title="GitHub"
            >
              ⌥
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-bg"></div>
          <img src={profileImg} alt="Vijeth" className="hero-photo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;