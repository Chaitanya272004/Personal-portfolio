import React, { useEffect } from 'react';
import './About.css';

export const About = () => {
  useEffect(() => {
    const fadeInElement = document.querySelector('.about-container h1');
    const fadeUpElement = document.querySelector('.about-text-container');

    const observerOptions = {
      threshold: 0.2, // Trigger when 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          fadeInObserver.unobserve(entry.target); // Unobserve to avoid retriggering
        }
      });
    }, observerOptions);

    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp');
          fadeUpObserver.unobserve(entry.target); // Unobserve to avoid retriggering
        }
      });
    }, observerOptions);

    fadeInObserver.observe(fadeInElement);
    fadeUpObserver.observe(fadeUpElement);
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-container">
        <h1>About Me</h1>
      </div>
      <div className="about-text-container">
        <div className="about-text">
          <p>
            I am a recent graduate eager to join a software company where I can enhance my skills in both technical and programming areas. I am keen to work within a collaborative team environment, where I can contribute my knowledge while gaining valuable experience. My goal is to continuously improve and grow as a professional, leveraging the opportunity to learn from experienced colleagues and tackle real-world challenges.
          </p>
        </div>
      </div>
    </div>
  );
};
