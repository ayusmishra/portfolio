// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <section className="projects-section" id="internships">
        <h2>Internships</h2>
        <div className="project-item">
          <h3>Cyber-Security Analyst Intern</h3>
          <p>Company: SDSR Consultancy Services</p>
          <p>Duration: January 2025 - March 2025</p>
          <p>Description: Developed a well organise plan for their system secuirty.</p>
        </div>
        <div className="project-item">
          <h3>Engineering expert</h3>
          <p>Company: Microsoft</p>
          <p>Duration: January 2023 - April 2023</p>
          <p>Description: Worked on improving user interfaces and user experience for web applications.</p>
        </div>
        <div className="project-item">
          <h3>Web Developer/SEO Intern</h3>
          <p>Company: Swarnabha Industries</p>
          <p>Duration: June 2022 - August 2022</p>
          <p>Description: Developed and maintained web applications and helps them market and drive traffic using various SEO techniques.</p>
        </div>
        
      </section>
      <section className="projects-section" id="personal-projects">
        <h2>Personal Projects</h2>
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>Description: Built a personal portfolio website using React.</p>
        </div>
        <div className="project-item">
          <h3>Blog Platform</h3>
          <p>Description: Created a blog platform with React and Firebase.</p>
        </div>
      </section>
      <section className="projects-section" id="hackathons">
        <h2>Hackathons</h2>
        <div className="project-item">
          <h3>Hackathon Project</h3>
          <p>Event: Smart India Hackathon 2024</p>
          <p>Description: Developed a luggage delivery system, in which people need not to care about their luggage going for outings.</p>
        </div>
        <div className="project-item">
          <h3>Another Hackathon Project</h3>
          <p>Event: Idea-competition 2024</p>
          <p>Description: Focused on creating a centralised system for farmers, where we will provide them more price than MSP.</p>
        </div>
        <div className="project-item">
          <h3>Another Hackathon Project</h3>
          <p>Event: IHMMC(Innovative Hardware Model Making Competition) 2025</p>
          <p>Description: Created a hardware based model for smart irrigation system, and a web-app for monitoring each and every thing.</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;