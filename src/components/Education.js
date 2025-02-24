// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.Tech in Computer Science & Technology</h3>
        <p>Narula Institute of Technology</p>
        <p>2023-Present</p>
      </div>
      <div className="education-item">
        <h3>Minor Engineering in Artificial Intelligence & Machine Learning</h3>
        <p>Indian Institute of Technology, Ropar</p>
        <p>2024-Present</p>
      </div>
      <div className="education-item">
        <h3>ISC-Indian School Certification by CISCE</h3>
        <p>Rose Bank Edu-Care High School</p>
        <p>Graduated: 2023</p>
      </div>
      <div className="education-item">
        <h3>ICSE-Indian Certificate of Secondary Education by CISCE</h3>
        <p>National Model School</p>
        <p>Graduated: 2021</p>
      </div>
    </section>
  );
};

export default Education;