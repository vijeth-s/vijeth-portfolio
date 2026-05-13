// src/App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Education />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Certifications />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;