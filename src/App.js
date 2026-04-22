import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div className={`app__main ${introDone ? 'app__main--visible' : ''}`}>
        <Nav scrolled={scrolled} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

