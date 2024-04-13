import React from 'react';
import { BsLinkedin, BsInstagram, BsGithub, BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  return (
    <div style={footerStyle}>
      <a href="https://www.linkedin.com/in/daniel-dominic-savio-kennedy-9180831aa/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/dominic._.savio?igsh=bXd5dnRmamI0ank5" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <BsInstagram />
      </a>
      <a href="https://github.com/DanielDominicSavioKennedy" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <BsGithub />
      </a>
      <a href="mailto:danieldominicsaviokennedy@gmail.com" style={iconStyle}>
        <BsEnvelope />
      </a>
    </div>
  );
};

export default Footer;

const footerStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '20px 0',
};

const iconStyle = {
  color: 'white',
  margin: '0 10px',
  fontSize: '24px',
};
