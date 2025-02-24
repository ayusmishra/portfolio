// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Email: <a href="mailto:ayush.mishra.iitrpr@gmail.com">Email me!</a></p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>Phone: <a href="tel:+918617241699">Call me!</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;