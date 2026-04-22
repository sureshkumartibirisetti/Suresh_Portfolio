import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__name">Tibirisetti Suresh Kumar</span>
          <span className="footer__role">PLM Developer & Full-Stack Engineer</span>
        </div>
        <div className="footer__right">
          <span className="footer__copy">© {new Date().getFullYear()} — Kakinada, Andhra Pradesh</span>
          <div className="footer__links">
            <a href="mailto:tibirisettisureshkumar@gmail.com" className="footer__link">Email</a>
            <a href="https://www.linkedin.com/in/suresh-kumar-tibirisetti-35629620b/" className="footer__link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/sureshkumartibirisetti" className="footer__link" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
