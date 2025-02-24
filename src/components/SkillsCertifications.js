// src/components/SkillsCertifications.js
import React from 'react';
import './SkillsCertifications.css';

const SkillsCertifications = () => {
  return (
    <section id="skills-certifications" className="skills-certifications">
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JAVA</li>
          <li>Python</li>
          <li>C</li>
          <li>C++</li>
          <li>JavaScript(JS)</li>
          <li>HTML/CSS</li>
          <li>BASH</li>
          <li>React JS</li>
          <li>Django</li>
          <li>SQL</li>
          <li>Bootstrap</li>
          <li>Linux OS</li>
        </ul>
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Full Stack Web-Developer Certification</li>
          <br />
          <li>Ethical-Hacking Certification</li>
          <br />
          <li>Search Engine Optimisation(SEO) Certification</li>
          <br />
          <li>React Developer Certification</li>
          <br />
          <li>JavaScript Certification</li>
        </ul>
      </div>
      <div className="certifications">
        <h2>Internships</h2>
        <ul>
          <li>SDSR Consultancy Services</li>
          <p className="small-text">Cyber security analyst</p>
          <li>Microsoft-Engineering Internship</li>
          <p className="small-text">Campus to corporate business foundation skills</p>
          <li>Swarnabha Industries</li>
          <p className="small-text">SEO manager, Social media manager and Web Developer</p>
        </ul>
      </div>
    </section>
  );
};

export default SkillsCertifications;