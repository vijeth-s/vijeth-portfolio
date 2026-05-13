// src/components/Education/Education.jsx
import React, { useEffect, useRef } from "react";
import "./Education.css";

const Education = () => {
  const eduRef = useRef(null);

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

    if (eduRef.current) {
      observer.observe(eduRef.current);
    }

    return () => {
      if (eduRef.current) {
        observer.unobserve(eduRef.current);
      }
    };
  }, []);

  return (
    <section id="education">
      <div className="section-label">Academic background</div>
      <h2>Education</h2>
      <div className="edu-list reveal" ref={eduRef}>
        <div className="edu-card">
          <div className="edu-year">2024</div>
          <div className="edu-info">
            <div className="edu-degree">BCA – Computer Applications</div>
            <div className="edu-school">Bhandarkars' Arts and Science College, Kundapura · Udupi</div>
            <div className="edu-uni">Mangalore University</div>
          </div>
          <div className="edu-score">85.03%</div>
        </div>

        <div className="edu-card">
          <div className="edu-year">2021</div>
          <div className="edu-info">
            <div className="edu-degree">PUC – CEBA</div>
            <div className="edu-school">VaraSiddhi Vinayaka PU College, Keradi · Udupi</div>
            <div className="edu-uni">KSEAB</div>
          </div>
          <div className="edu-score">95.33%</div>
        </div>

        <div className="edu-card">
          <div className="edu-year">2019</div>
          <div className="edu-info">
            <div className="edu-degree">SSLC</div>
            <div className="edu-school">Sri Mookambika Temple High School, Hosur · Udupi</div>
            <div className="edu-uni">KSEEB</div>
          </div>
          <div className="edu-score">92.64%</div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
