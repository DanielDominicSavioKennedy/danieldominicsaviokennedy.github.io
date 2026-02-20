import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub, BsEnvelope } from 'react-icons/bs';
import { Parallax } from 'react-scroll-parallax';
import "../css/About.css"

const About = () => {
  return (
    <Parallax speed={15} translateY={[1, -100]} tagOuter="figure">
    <div className="about-section" style={{ backgroundColor: 'black', color: 'white', paddingInline: '20vw', paddingBottom:'50px' }}>
    <p className="about" style={{fontFamily: 'Abril Fatface, serif', margin:0 }} >About..</p>
      <h2 style={{margin:0}}>Welcome to Dominic Savio's world of wonder!</h2>
      <p>
      Hi, I’m Dominic Savio, an AI-focused software engineer passionate about building intelligent systems and scalable applications. I work on training and fine-tuning AI models, developing AI agents that automate workflows and support smart decision-making, and integrating them into modern, real-world products.
      <br />
      I enjoy solving complex problems and turning ambitious ideas into practical solutions. From backend architecture to intelligent agent orchestration, I like building systems that are efficient, impactful, and built to scale.
      <br />
      Turning problems into punchlines and projects into parties, I believe tech should be powerful but also exciting. Let’s collaborate, innovate, and create something epic together. Join me on this wild ride of tech-tastic adventures. 
      </p>
      <div className="social" style={{ display: 'flex', gap: '10px', justifyContent:'end' }}> 
      <a href="https://www.linkedin.com/in/daniel-dominic-savio-kennedy-9180831aa/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/dominic._.savio?igsh=bXd5dnRmamI0ank5" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
        <BsInstagram />
      </a>
      <a href="https://github.com/DanielDominicSavioKennedy" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
        <BsGithub />
      </a>
      <a href="mailto:danieldominicsaviokennedy@gmail.com" style={{ color: 'inherit' }}>
        <BsEnvelope />
      </a>
      </div>
    </div>
    </Parallax>
  );
};

export default About;
