// src/components/Experience/Experience.jsx
import React, { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
  const expRef = useRef(null);

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

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []);

  return (
    <section id="experience">
      <div className="section-label">Where I've worked</div>
      <h2>Experience</h2>
      <div className="exp-list reveal" ref={expRef}>
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-title">Intern – IT Software (Product Management)</div>
              <div className="exp-company">K12 Techno Services Private Limited</div>
            </div>
            <span className="exp-period">Jan 2026 – Apr 2026</span>
          </div>
          <ul className="exp-bullets">
            <li>Supported product lifecycle activities including requirement analysis, documentation, and coordination between technical and business teams.</li>
            <li>Assisted in data analysis, issue tracking, and process improvements for ERP-based systems.</li>
            <li>Collaborated with cross-functional teams to translate user requirements into functional specifications.</li>
          </ul>
        </div>

        <div className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-title">Trainee QA Executive</div>
              <div className="exp-company">Winman Software India LLP</div>
            </div>
            <span className="exp-period">Oct 2025 – Jan 2026</span>
          </div>
          <ul className="exp-bullets">
            <li>Managed testing of new and updated features for internal applications including Ticket, Reminder, and DataManager.</li>
            <li>Identified, documented, and tracked software defects, collaborating with dev teams to ensure high-quality releases.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
