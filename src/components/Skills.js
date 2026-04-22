import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Skills.css';

const skillGroups = [
  {
    category: 'PLM / Enovia',
    items: ['JPO (Java Program Objects)', 'ADK Framework', 'MQL', 'TCL', 'UI-3 Components & Widgets', 'Schema Configuration', 'Change Management (ECR/ECO)', 'BOM Management', 'Enovia 3DEXPERIENCE'],
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'MQL', 'TCL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'HTML5 & CSS3', 'Bootstrap', 'JSP', 'Spinner Components'],
  },
  {
    category: 'Backend & Database',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'SQL', 'Role-Based Access Control'],
  },
  {
    category: 'Cloud & Tools',
    items: ['Amazon Web Services (AWS)', 'VS Code', 'Git & GitHub', 'Linux', 'Postman'],
  },
  {
    category: 'Core Competencies',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'PLM Customization', 'Cross-functional Collaboration'],
  },
];

function Skills() {
  const ref = useFadeIn();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">Skills</p>
          <h2 className="section-heading">What I work with</h2>

          <div className="skills__grid">
            {skillGroups.map((group, i) => (
              <div className="skills__group" key={i}>
                <div className="skills__category">{group.category}</div>
                <ul className="skills__list">
                  {group.items.map((item, j) => (
                    <li key={j} className="skills__item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
