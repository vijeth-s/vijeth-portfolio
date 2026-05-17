// src/components/Projects/Projects.jsx
import React, { useEffect, useRef } from "react";
import "./Projects.css";

const Projects = () => {
  const projectsRef = useRef(null);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      subtitle: "Interactive Learning & Code Generator",
      name: "CSS Playground",
      description: "Interactive CSS learning platform with real-time preview, styling modules, and dynamic code generation with a clean, responsive interface.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      demoLink: "https://vijeth-s.github.io/CSS-PlayGround/",
      codeLink: "https://github.com/vijeth-s/css-playground"
    },
    {
      subtitle: "Interactive SQL Learning Platform",
      name: "SQL Mastery Platform",
      description: "Browser-based SQL learning platform with an interactive SQL playground, built-in sample databases, runnable queries, and beginner-to-advanced lessons in a responsive developer-focused interface.",
      tech: ["React", "Vite", "Tailwind CSS", "SQL.js", "SQLite", "Framer Motion"],
      demoLink: "https://vijeth-s.github.io/Sql-Mastery-Platform/",
      codeLink: "https://github.com/vijeth-s/Sql-Mastery-Platform"
    },
    {
      subtitle: "Search Movies by Title",
      name: "Movie Search App",
      description: "Search movies by title and display detailed information using a live movie API, presented in a responsive and user-friendly layout.",
      tech: ["JavaScript", "REST API", "HTML", "CSS"],
      demoLink: "https://vijeth-shetty.github.io/Movie-Search/",
      codeLink: "https://github.com/vijeth-s/Movie-Search"
    }
  ];

  return (
    <section id="projects">
      <div className="section-label">Things I've built</div>
      <h2>Projects</h2>
      <div className="proj-grid reveal" ref={projectsRef}>
        {projects.map((project, index) => (
          <div className="proj-card" key={index}>
            <div className="proj-subtitle">{project.subtitle}</div>
            <div className="proj-name">{project.name}</div>
            <p className="proj-desc">{project.description}</p>
            <div className="proj-tech">
              {project.tech.map((tech, techIndex) => (
                <span className="tech-tag" key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="proj-links">
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="proj-link demo">
                Live Demo ↗
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer" className="proj-link code">
                Code ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
