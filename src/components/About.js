import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './About.css';

function About() {
  const ref = useFadeIn();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">About</p>
          <div className="about__grid">
            <div className="about__left">
              <h2 className="section-heading">
                I build enterprise PLM<br />
                <em>solutions that scale.</em>
              </h2>
            </div>
            <div className="about__right">
              <p className="about__text">
                I'm a PLM Software Developer with hands-on experience in{' '}
                <strong>Enovia / 3DEXPERIENCE</strong> platform customization and full-stack PLM
                application development. Proficient in JPO, ADK, TCL, MQL, and Schema
                configuration for enterprise-grade Product Lifecycle Management solutions.
              </p>
              <p className="about__text">
                My expertise spans Change Management, BOM Management, and quality workflows,
                complemented by a strong foundation in Java, Python, React, and cloud technologies.
              </p>

              <div className="about__education">
                <div className="about__edu-label">Education</div>
                <div className="about__edu-item">
                  <div className="about__edu-degree">B.Tech — Electronics & Communication Engineering</div>
                  <div className="about__edu-school">Aditya College of Engineering, Surampalem, AP</div>
                  <div className="about__edu-meta">June 2020 – May 2024 &nbsp;·&nbsp; CGPA: 7.54</div>
                </div>
              </div>

              <div className="about__location">
                <span className="about__location-dot">📍</span>
                Kakinada, Andhra Pradesh, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
