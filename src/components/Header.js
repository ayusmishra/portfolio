// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <>
      <h1>Ayush Mishra <br />
      <p className="small">Web-developer/Ethical Hacker/AI engineer</p>
      <p className= "linkedIn"><a className= "linkedIn" href="https://www.linkedin.com/in/ayush-mishra-a48370151/">LinkedIn</a> / <a className= "linkedIn" href="https://github.com/ayusmishra">GitHub</a></p>
      </h1>
      
      </>
      <nav>
        <ul>
          {/* <li><a href="#about">About</a></li>
          <li><a href="#skills-certifications">SkillsCertifications</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li> */}
          <li><a href="/about">About</a></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="/skills-certifications">SkillsCertifications</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;