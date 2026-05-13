// src/components/Certifications/Certifications.jsx
import React, { useEffect, useRef } from "react";
import "./Certifications.css";

const Certifications = () => {
  const certRef = useRef(null);

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

    if (certRef.current) {
      observer.observe(certRef.current);
    }

    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications">
      <div className="section-label">Learning & credentials</div>
      <h2>Certifications</h2>
      <div className="cert-grid reveal" ref={certRef}>
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/V5SFU7R5WXJQ"
          target="_blank"
          rel="noreferrer"
          className="cert-card"
        >
          <div className="cert-icon g">🔒</div>
          <div>
            <div className="cert-name">Google Cybersecurity Certification</div>
            <div className="cert-issuer">Google via Coursera</div>
            <span className="cert-link">View credential ↗</span>
          </div>
        </a>

        <div className="cert-card">
          <div className="cert-icon o">🗄</div>
          <div>
            <div className="cert-name">Databases for Developers Foundations</div>
            <div className="cert-issuer">Oracle Corporation (Oracle Dev Gym)</div>
          </div>
        </div>

        <a
          href="https://www.udemy.com/certificate/UC-cae89ac2-64f4-4a6a-b442-64b777bdfdfe/"
          target="_blank"
          rel="noreferrer"
          className="cert-card"
        >
          <div className="cert-icon u">🌐</div>
          <div>
            <div className="cert-name">The Complete Full-Stack Web Development Bootcamp</div>
            <div className="cert-issuer">Udemy</div>
            <span className="cert-link">View credential ↗</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Certifications; 
