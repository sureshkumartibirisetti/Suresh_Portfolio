import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Experience.css';

const jobs = [
  {
    company: 'Devahuthi Software Solutions',
    role: 'Software Engineer(PLM Developer)',
    period: 'Aug 2025 – Present',
    location: 'Andhra Pradesh',
    current: true,
    highlights: [
      'Developed and customized Enovia/3DEXPERIENCE platform components using JPO, ADK, TCL, and MQL for enterprise PLM workflows.',
      'Designed and configured custom UI components using UI-3 framework and Widgets to enhance user experience within Enovia.',
      'Managed Schema customization including business type creation, attribute definitions, relationships, and policy configurations.',
      'Implemented and maintained Change Management processes — ECR, ECO, and deviation workflows — ensuring compliance with engineering change standards.',
      'Configured and optimized BOM Management structures to support multi-level product hierarchy and engineering data integrity.',
      'Built custom Portals, Forms, Channels, and Routes within Enovia using OOTB methods and ADK framework.',
    ],
    tags: ['JPO', 'ADK', 'MQL', 'TCL', 'Enovia', '3DEXPERIENCE', 'Change Management', 'BOM'],
  },
  {
    company: 'Technical Hub',
    role: 'Python & AWS Intern',
    period: 'July 2022 – Nov 2022',
    location: 'Surampalem, AP',
    current: false,
    highlights: [
      'Implemented Data Structures and Algorithms to optimize performance across internal tools.',
      'Applied Object-Oriented Programming principles for scalable software solutions.',
      'Worked with APIs, SQL databases, and integrated cloud services using AWS.',
      'Collaborated with team members to deliver efficient and maintainable code.',
    ],
    tags: ['Python', 'AWS', 'DSA', 'OOP', 'SQL'],
  },
];

function Experience() {
  const ref = useFadeIn();

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Where I've worked</h2>

          <div className="exp__list">
            {jobs.map((job, i) => (
              <div className="exp__item" key={i}>
                <div className="exp__meta">
                  <div className="exp__period">{job.period}</div>
                  {job.current && <div className="exp__badge">Current</div>}
                  <div className="exp__location">{job.location}</div>
                </div>
                <div className="exp__body">
                  <div className="exp__header">
                    <h3 className="exp__role">{job.role}</h3>
                    <div className="exp__company">{job.company}</div>
                  </div>
                  <ul className="exp__highlights">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="exp__highlight">{h}</li>
                    ))}
                  </ul>
                  <div className="exp__tags">
                    {job.tags.map(t => (
                      <span key={t} className="exp__tag">{t}</span>
                    ))}
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

export default Experience;
