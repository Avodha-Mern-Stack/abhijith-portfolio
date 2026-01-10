import React from 'react';
import './About.css';
import abhi_logo from '../../assets/abhi_logo.jpg'

const About = () => {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'React JS',
    'Node JS & Express JS',
    'MongoDB & SQL',
    'Git & GitHub',
  ];

  return (
    <section id='about' className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <div className="header-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={abhi_logo} alt="Profile" />
        </div>

        <div className="about-details">
          <p>
            I’m a Full Stack Developer passionate about creating responsive, dynamic, and scalable web applications.
            I enjoy solving real-world problems using clean, efficient code with a focus on both frontend and backend technologies.
          </p>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>{skill}</span>
                <div className="skill-bar"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
