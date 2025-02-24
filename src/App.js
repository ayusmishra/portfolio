// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import SkillsCertifications from './components/SkillsCertifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills-certifications" element={<SkillsCertifications />} />
          
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <About />
      <SkillsCertifications />
      <Education />
      <Contact />
    </>
  );
};

export default App;