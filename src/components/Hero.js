import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="top">
      <div className={"hero__content" + (loaded ? ' hero__content--visible' : '')}>
        <div className="hero__left">
          <div className="hero__tag">Available for new opportunities</div>
          <h1 className="hero__name">Tibirisetti<br />Suresh Kumar</h1>
          <p className="hero__role">PLM Developer &amp; Full-Stack Engineer</p>
          <p className="hero__intro">
            Hello! I'm Suresh, a PLM Software Developer specializing in{' '}
            <strong>Enovia / 3DEXPERIENCE</strong> platform customization. Based in{' '}
            <strong>Kakinada, Andhra Pradesh</strong> — building scalable, clean, and efficient
            enterprise PLM solutions.
          </p>
          <div className="hero__links">
            <a href="mailto:tibirisettisureshkumar@gmail.com" className="hero__link">Email</a>
            <a href="https://www.linkedin.com/in/suresh-kumar-tibirisetti-35629620b/" className="hero__link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/sureshkumartibirisetti" className="hero__link" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#projects" className="hero__link hero__link--accent">View Projects →</a>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__card-inner">
              <div className="hero__avatar">SK</div>
              <p className="hero__card-quote">
                "Passionate about delivering scalable, clean, and efficient PLM solutions that bridge engineering and technology."
              </p>
              <div className="hero__stats">
                <div className="hero__stat">
                  <span className="hero__stat-num">1+</span>
                  <span className="hero__stat-label">Year PLM Experience</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-num">900+</span>
                  <span className="hero__stat-label">Problems Solved</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-num">5★</span>
                  <span className="hero__stat-label">HackerRank Python & Java</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-track">
          {['JPO', 'ADK', 'MQL', 'TCL', 'React.js', 'Node.js', 'PostgreSQL', 'Enovia', '3DEXPERIENCE', 'AWS', 'Java', 'Python', 'Change Management', 'BOM Management',
            'JPO', 'ADK', 'MQL', 'TCL', 'React.js', 'Node.js', 'PostgreSQL', 'Enovia', '3DEXPERIENCE', 'AWS', 'Java', 'Python', 'Change Management', 'BOM Management'].map((t, i) => (
            <span key={i} className="hero__marquee-item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
