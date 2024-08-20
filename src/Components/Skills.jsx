import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

export const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  return (
    <div className='skills-wrapper' id="skills">
      <div className="skills-container">
        <h1>My Skills</h1>
      </div>
      <div className={`skill-show-container ${skillsInView ? 'animate' : ''}`} ref={skillsRef}>
        <div className="skill1">
          <FaHtml5 />
          HTML
        </div>
        <div className="skill2">
          <FaCss3Alt />
          CSS
        </div>
        <div className="skill3">
          <FaJs />
          JS
        </div>
      </div>
      <div className={`skill-show-container2 ${skillsInView ? 'animate' : ''}`} ref={skillsRef}>
        <div className="skill4">
          <FaReact />
          REACT JS
        </div>
        <div className="skill5">
          <FaPython />
          PYTHON
        </div>
        <div className="skill6">
          <SiDjango />
          Django
        </div>
      </div>
    </div>
  );
};
