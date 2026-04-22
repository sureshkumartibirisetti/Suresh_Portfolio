import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';
import './Achievements.css';

const certs = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', icon: '☁️' },
  { title: 'IT Specialist – Python', issuer: 'Certiport', icon: '🐍' },
  { title: 'Java Oracle Certification', issuer: 'Oracle', icon: '☕' },
  { title: 'TCS ION Career Edge – Young Professional', issuer: 'TCS iON', icon: '🏆' },
  { title: 'AWS Cloud Computing Bootcamp', issuer: 'Google & Microsoft', icon: '🚀' },
];

const profiles = [
  { platform: 'CodeChef', stat: '500+', label: 'Problems Solved', url: 'https://www.codechef.com/users/suresh_4i2', color: '#5B4638' },
  { platform: 'LeetCode', stat: '400+', label: 'Problems Solved', url: 'https://leetcode.com/u/20MH1A04I2/', color: '#FFA116' },
  { platform: 'GeeksforGeeks', stat: '150+', label: 'Problems Solved', url: 'https://www.geeksforgeeks.org/user/tibirisettisyraq/', color: '#2F8D46' },
  { platform: 'HackerRank', stat: '5 ★', label: 'Python & Java', url: 'https://www.hackerrank.com/profile/20mh1a04i2', color: '#00EA64' },
];

function Achievements() {
  const ref = useFadeIn();

  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <div className="fade-in" ref={ref}>
          <p className="section-label">Recognition</p>
          <h2 className="section-heading">Certifications<br /><em>&amp; achievements</em></h2>

          <div className="ach__layout">
            <div className="ach__col">
              <div className="ach__sublabel">Certifications</div>
              <div className="ach__certs">
                {certs.map((c, i) => (
                  <div className="ach__cert" key={i}>
                    <span className="ach__cert-icon">{c.icon}</span>
                    <div>
                      <div className="ach__cert-title">{c.title}</div>
                      <div className="ach__cert-issuer">{c.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ach__col">
              <div className="ach__sublabel">Coding Profiles</div>
              <div className="ach__profiles">
                {profiles.map((p, i) => (
                  <a
                    href={p.url}
                    className="ach__profile"
                    key={i}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="ach__profile-dot" style={{ background: p.color }}></div>
                    <div className="ach__profile-info">
                      <span className="ach__profile-platform">{p.platform}</span>
                      <span className="ach__profile-label">{p.label}</span>
                    </div>
                    <div className="ach__profile-stat">{p.stat}</div>
                  </a>
                ))}
              </div>

              <div className="ach__honor">
                <div className="ach__honor-icon">🎖</div>
                <div>
                  <div className="ach__honor-title">Top Performer</div>
                  <div className="ach__honor-desc">DriveReady Program — Technical Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
