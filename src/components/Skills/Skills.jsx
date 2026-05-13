// src/components/Skills/Skills.jsx
import React, { useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills">
      <div className="section-label">What I know</div>
      <h2>Technical Skills</h2>
      
      {/* OTW Banner - Direct styling to ensure visibility */}
      <div className="otw-banner" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        background: 'rgba(108, 99, 255, 0.15)',
        border: '1px solid rgba(108, 99, 255, 0.4)',
        borderRadius: '16px',
        padding: '1.25rem 1.75rem',
        marginBottom: '2.5rem',
        width: '100%'
      }}>
        <div className="otw-left" style={{ flex: 1 }}>
          <div className="otw-title" style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#f0eeff',
            marginBottom: '4px'
          }}>
            Currently seeking roles in
          </div>
          <div className="otw-sub" style={{
            fontSize: '0.83rem',
            color: '#8b87aa',
            marginTop: '2px'
          }}>
            Open to jobs and freelance — coding, building, and testing
          </div>
        </div>
        <div className="otw-tags" style={{
          display: 'flex',
          gap: '0.6rem',
          flexWrap: 'wrap'
        }}>
          <span className="otw-tag fe" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(108, 99, 255, 0.3)',
            background: 'rgba(108, 99, 255, 0.1)',
            color: '#c4c0ff'
          }}>⚡ Frontend Dev</span>
          
          <span className="otw-tag be" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(255, 101, 132, 0.25)',
            background: 'rgba(255, 101, 132, 0.08)',
            color: '#ffb3c4'
          }}>🔧 Backend Dev</span>
          
          <span className="otw-tag fs" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(251, 191, 36, 0.25)',
            background: 'rgba(251, 191, 36, 0.08)',
            color: '#fde68a'
          }}>🌐 Full-Stack Dev</span>
          
          <span className="otw-tag sql" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(74, 222, 128, 0.25)',
            background: 'rgba(74, 222, 128, 0.08)',
            color: '#86efac'
          }}>🗄 SQL / Database</span>
          
          <span className="otw-tag code" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(167, 139, 250, 0.25)',
            background: 'rgba(167, 139, 250, 0.08)',
            color: '#ddd6fe'
          }}>💻 Coding Related</span>
          
          <span className="otw-tag qa" style={{
            fontSize: '0.74rem',
            fontWeight: 500,
            borderRadius: '50px',
            padding: '4px 12px',
            border: '0.5px solid rgba(56, 189, 248, 0.25)',
            background: 'rgba(56, 189, 248, 0.08)',
            color: '#bae6fd'
          }}>🧪 Testing / QA</span>
        </div>
      </div>

      <div className="skills-grid reveal" ref={skillsRef}>
        <div className="skill-card highlight">
          <div className="skill-cat">Languages <span className="star">★ Primary</span></div>
          <div className="skill-tags">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">Adv. Java</span>
            <span className="skill-tag">JavaScript</span>
          </div>
        </div>

        <div className="skill-card highlight">
          <div className="skill-cat">Frontend <span className="star">★ Primary</span></div>
          <div className="skill-tags">
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">EJS</span>
          </div>
        </div>

        <div className="skill-card highlight">
          <div className="skill-cat">Databases & SQL <span className="star">★ Primary</span></div>
          <div className="skill-tags">
            <span className="skill-tag green">Oracle SQL</span>
            <span className="skill-tag green">MySQL</span>
            <span className="skill-tag green">PostgreSQL</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Backend</div>
          <div className="skill-tags">
            <span className="skill-tag">Hibernate</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Dev Tools & IDEs</div>
          <div className="skill-tags">
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Eclipse</span>
            <span className="skill-tag">IntelliJ IDEA</span>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-cat">Version Control</div>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">npm</span>
            <span className="skill-tag">Apache Maven</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;