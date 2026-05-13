// src/components/Contact/Contact.jsx
import React, { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact">
      <div className="section-label">Say hello</div>
      <h2>Get in Touch</h2>
      <div className="contact-grid reveal" ref={contactRef}>
        <a href="mailto:vijethshetty334@gmail.com" className="contact-card">
          <div className="contact-icon">✉</div>
          <div>
            <div className="contact-label">Email</div>
            <div className="contact-val">vijethshetty334@gmail.com</div>
          </div>
        </a>

        <a href="mailto:vijeth.s03@gmail.com" className="contact-card">
          <div className="contact-icon">✉</div>
          <div>
            <div className="contact-label">Email (Alt)</div>
            <div className="contact-val">vijeth.s03@gmail.com</div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/vijeth-shetty-334s"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">💼</div>
          <div>
            <div className="contact-label">LinkedIn</div>
            <div className="contact-val">vijeth-shetty-334s</div>
          </div>
        </a>

        <a
          href="https://github.com/vijeth-s"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">⌥</div>
          <div>
            <div className="contact-label">GitHub</div>
            <div className="contact-val">github.com/vijeth-s</div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
