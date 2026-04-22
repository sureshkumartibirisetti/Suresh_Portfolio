import React, { useEffect, useState } from 'react';
import './Intro.css';

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: ((i * 47.3 + 13) % 100).toFixed(1) + '%',
  top: ((i * 31.7 + 7) % 100).toFixed(1) + '%',
  delay: ((i * 0.37) % 3).toFixed(2) + 's',
  duration: (2 + (i * 0.29) % 3).toFixed(2) + 's',
  size: (2 + (i * 0.41) % 3).toFixed(1) + 'px',
}));

const WORDS = ['Welcome', 'to my', 'world'];

function Intro({ onDone }) {
  const [stage, setStage] = useState(0);
  const [lineActive, setLineActive] = useState(false);

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setStage(1), 700));
    timers.push(setTimeout(() => setStage(2), 1450));
    timers.push(setTimeout(() => setStage(3), 2300));
    timers.push(setTimeout(() => setLineActive(true), 2600));
    timers.push(setTimeout(() => setStage(4), 4000));
    timers.push(setTimeout(() => onDone(), 4800));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={"intro" + (stage === 4 ? ' intro--exit' : '')}>
      <div className="intro__grid" />
      <div className="intro__orb intro__orb--1" />
      <div className="intro__orb intro__orb--2" />
      <div className="intro__orb intro__orb--3" />

      {PARTICLES.map((p, i) => (
        <div key={i} className="intro__particle" style={{
          left: p.left, top: p.top,
          animationDelay: p.delay,
          animationDuration: p.duration,
          width: p.size, height: p.size,
        }} />
      ))}

      <div className="intro__corner intro__corner--tl" />
      <div className="intro__corner intro__corner--tr" />
      <div className="intro__corner intro__corner--bl" />
      <div className="intro__corner intro__corner--br" />
      <div className="intro__scanline" />

      <div className="intro__stage">
        {stage < 3 && (
          <div className="intro__words">
            {WORDS.map((w, i) => (
              <span key={i} className={"intro__word" + (stage >= i ? ' intro__word--in' : '')}>
                {w}
              </span>
            ))}
          </div>
        )}

        {stage >= 3 && (
          <div className="intro__final">
            <div className="intro__final-label">Entering the portfolio of</div>
            <div className="intro__final-name">
              <span className="intro__final-first">Suresh</span>
              <span className="intro__final-last">Kumar</span>
            </div>
            <div className="intro__final-role">PLM Developer &amp; Full-Stack Engineer</div>
            <div className="intro__bar-wrap">
              <div className={"intro__bar" + (lineActive ? ' intro__bar--full' : '')} />
              <div className={"intro__bar-glow" + (lineActive ? ' intro__bar-glow--full' : '')} />
            </div>
            <div className={"intro__enter-hint" + (lineActive ? ' intro__enter-hint--in' : '')}>
              Loading experience...
            </div>
          </div>
        )}
      </div>

      <div className="intro__meta">
        <div className="intro__meta-left">
          <span className="intro__meta-dot" />
          <span>Kakinada, India</span>
        </div>
        <div className="intro__meta-right">Portfolio · 2025</div>
      </div>
    </div>
  );
}

export default Intro;
