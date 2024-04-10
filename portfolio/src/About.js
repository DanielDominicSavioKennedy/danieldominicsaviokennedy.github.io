import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub, BsEnvelope } from 'react-icons/bs';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <Parallax speed={15} translateY={[1, -100]} tagOuter="figure">
    <div className="about-section" style={{ backgroundColor: 'black', color: 'white', paddingInline: '20vw', paddingBottom:'50px' }}>
    <p style={{fontFamily: 'Abril Fatface, serif', fontSize: '100px', margin:0 }} >About..</p>
      <h2 style={{margin:0}}>Welcome to Dominic Savio's world of wonder!</h2>
      <p>
        I'm Dominic Savio, your friendly neighborhood tech wizard and melody magician. With a passion for AI, Web Development, and Designing, I'm like Django on a musical TensorFlow ride! When I'm not weaving code spells or conjuring up digital delights, you'll find me strumming strings and hitting high notes as a musician extraordinaire. Got a challenge? Bring it on! I thrive on turning problems into punchlines and projects into parties. Let's collaborate, innovate, and create something epic together. So, grab your coding wand and join me on this wild ride of tech-tastic adventures!
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
