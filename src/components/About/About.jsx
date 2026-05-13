// src/components/About/About.jsx
import React, { useEffect, useRef } from "react";
import "./About.css";
import profileImg from "../../assets/Vijeth_Photograph.JPG";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className="section-label">Who I am</div>
      <h2>About Me</h2>
      <div className="about-grid reveal" ref={aboutRef}>
        <img src={profileImg} alt="Vijeth" className="about-photo" />
        <div>
          <p className="about-text">
            I'm <span>Vijeth</span>, a <span>Full-Stack Developer</span> from Udupi, Karnataka with a BCA background and a genuine love for building things on the web. I work across the stack — from crafting responsive UIs with React and modern CSS to building reliable backends with Java, Node.js, and SQL databases.
            <br />
            <br />
            I bring hands-on experience in <span>product management</span> and <span>QA</span>, which means I don't just write code — I think about usability, edge cases, and quality. I'm a fast learner, a strong collaborator, and someone who thrives when solving real problems. Whether it's a full-time role or a freelance project, I'm ready to contribute from day one.
          </p>
          <div className="about-tags">
            <span className="about-tag">💼 Open to Full-time</span>
            <span className="about-tag">🔧 Available for Freelance</span>
            <span className="about-tag">📍 Udupi, Karnataka</span>
            <span className="about-tag">🎓 BCA Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
