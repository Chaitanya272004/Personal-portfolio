import React from 'react';
import { Navbar } from './Navbar.jsx';
import homeImage from '../Assets/mypic.jpg';
import { About } from './About.jsx';
import { Skills } from './Skills.jsx';
import { Contact } from './Contact.jsx';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import myCV from '../Assets/ChaitanyaRowthu.pdf'

export const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="home-container" id="home">
        <div className="home-image-container">
          <img src={homeImage} alt="" />
        </div>
        <div className="home-text-container">
          <h1>Hey, there</h1>
          <h2>I am a Student</h2>
          <button>
            <a href={myCV} download="Chaitanya_CV.pdf">Download CV</a>
          </button>
          <div className="social-links">
          <a href="https://www.linkedin.com/in/chaitanya-rowthu-6b812528a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Chaitanya272004" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:chaitanyachaitu1983@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
      </section>
      <section id="skills">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Skills />
        </motion.div>
      </section>
      <section id="contact">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </section>
    </div>
  );
};
