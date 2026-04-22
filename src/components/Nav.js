import React, { useState } from 'react';
import './Nav.css';

function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo">Suresh Kumar</a>

        <ul className="nav__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav__link">{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="mailto:tibirisettisureshkumar@gmail.com"
              className="nav__cta"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button className="nav__hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={open ? 'open' : ''}></span>
          <span className={open ? 'open' : ''}></span>
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="mailto:tibirisettisureshkumar@gmail.com" className="nav__mobile-link nav__mobile-cta" onClick={() => setOpen(false)}>
          Get in touch →
        </a>
      </div>
    </nav>
  );
}

export default Nav;
