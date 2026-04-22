import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Contact.css';

function Contact() {
  const ref = useFadeIn();

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">Get in touch</p>

          <div className="contact__layout">
            <div className="contact__left">
              <h2 className="contact__heading">
                Let's build<br />
                something<br />
                <em>together.</em>
              </h2>
            </div>

            <div className="contact__right">
              <p className="contact__text">
                I'm open to new opportunities, collaborations, and interesting conversations
                about PLM, enterprise software, and full-stack development. Feel free to reach out.
              </p>

              <div className="contact__links">
                <a href="mailto:tibirisettisureshkumar@gmail.com" className="contact__primary">
                  tibirisettisureshkumar@gmail.com
                  <span className="contact__arrow">→</span>
                </a>

                <div className="contact__secondary">
                  <a href="tel:+919347929628" className="contact__sec-link">
                    +91 93479 29628
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suresh-kumar-tibirisetti-35629620b/"
                    className="contact__sec-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sureshkumartibirisetti"
                    className="contact__sec-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
