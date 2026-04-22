import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Customized Central – Enovia PLM Portal',
    description:
      'Architected and developed a Customized Central module within Enovia 3DEXPERIENCE, implementing custom Forms, Portals, and Channels to streamline engineering workflows.',
    details: [
      'Built dynamic routing logic using ADK framework methods to handle navigation between PLM objects, ensuring seamless user journey across modules.',
      'Leveraged OOTB Enovia methods combined with custom JPO programs to implement business logic for data validation and lifecycle transitions.',
      'Extended UI layer with JSP customizations using Spinner components for loading states and dynamic field rendering based on user roles and object states.',
      'Applied MQL scripts for schema-level customizations — attribute creation, relationship definitions, and policy enforcement.',
      'Implemented TCL scripts for batch operations and automated object management, reducing manual data processing time.',
    ],
    stack: ['Enovia', 'MQL', 'JPO', 'JSP', 'Spinner', 'TCL', 'ADK'],
    type: 'Enterprise PLM',
    github: null,
  },
  {
    number: '02',
    title: 'PLM Web Application (Full-Stack)',
    description:
      'Designed and built a full-stack PLM web application providing enterprise-grade product lifecycle management capabilities through a modern web interface.',
    details: [
      'Developed React-based frontend with modular components for Change & Issue Management, CAPA, Quality Management, and BOM modules.',
      'Built RESTful API backend using Node.js and Express.js with role-based access control (RBAC) to secure PLM services across multiple user personas.',
      'Implemented PostgreSQL database schema to manage complex product hierarchies, BOM structures, project data, and quality records with referential integrity.',
      'Delivered Full Text Search capability enabling engineers to efficiently search across PLM objects, documents, and change records.',
      'Integrated Project & Program Management module to track milestones, deliverables, and resource allocation tied to product development workflows.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'RBAC'],
    type: 'Full-Stack Web App',
    github: 'https://github.com/sureshkumartibirisetti',
  },
  {
    number: '03',
    title: 'Tourister Booking System',
    description:
      'Developed a vehicle booking platform using Java to facilitate travel requests, focused on backend core logic for route management and vehicle request processing.',
    details: [
      'Engineered the core backend logic for a travel booking platform, focusing on vehicle request processing and route management.',
      'Integrated interactive ways for visualizing Tourister locations and routes.',
      'Applied OOP principles and DSA for efficient route computation and booking workflows.',
    ],
    stack: ['Java', 'OOP', 'DSA'],
    type: 'Backend Application',
    github: 'https://github.com/sureshkumartibirisetti/Tourist_Mini_Application',
  },
];

function Projects() {
  const ref = useFadeIn();
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">Projects</p>
          <h2 className="section-heading">Things I've built</h2>

          <div className="proj__list">
            {projects.map((p, i) => (
              <div
                className={`proj__item ${expanded === i ? 'proj__item--expanded' : ''}`}
                key={i}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="proj__top">
                  <div className="proj__left">
                    <span className="proj__number">{p.number}</span>
                    <div className="proj__title-wrap">
                      <h3 className="proj__title">{p.title}</h3>
                      <p className="proj__desc">{p.description}</p>
                    </div>
                  </div>
                  <div className="proj__right">
                    <span className="proj__type">{p.type}</span>
                    <button className="proj__toggle" aria-label="Expand">
                      <span className="proj__toggle-icon">{expanded === i ? '−' : '+'}</span>
                    </button>
                  </div>
                </div>

                <div className="proj__expanded-content">
                  <ul className="proj__details">
                    {p.details.map((d, j) => (
                      <li key={j} className="proj__detail">{d}</li>
                    ))}
                  </ul>
                  <div className="proj__footer">
                    <div className="proj__stack">
                      {p.stack.map(t => (
                        <span key={t} className="proj__tag">{t}</span>
                      ))}
                    </div>
                    {p.github && (
                      <a
                        href={p.github}
                        className="proj__link"
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
