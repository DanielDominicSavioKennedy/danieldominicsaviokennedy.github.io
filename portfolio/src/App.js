import React from 'react';
import './App.css';
import { Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import testImage from './p_sketch.png'; // Import the image file
import {BsFileEarmarkPdf} from 'react-icons/bs';

function App() {

  return (
    <div className="main">
    <div className="App">
      
      <div className="cname">
        <div className="name" style={{ display: 'inline-block' }}>
          <p style={{ display: 'inline', fontFamily: 'Abril Fatface, serif' }} >Daniel Dominic Savio Kennedy | </p>
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "AI Engineer",
              1000,
              "Designer",
              1000,
              "Loading...",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
          
        </div>
        <div style={{padding: '18px', margin: '10px'}}>
          <BsFileEarmarkPdf  />
        </div>
      </div>
      <div className="Appm">
        <div className="ccontainer" >
          <Image src={testImage} fluid className="cimage" />
        </div>
        <div className="marquee">
          <span>
            <a style={{ fontFamily: 'Abril Fatface, serif' }}>DANIEL DOMINIC SAVIO KENNEDY DANIEL DOMINIC SAVIO KENNEDY DANIEL DOMINIC SAVIO KENNEDY DANIEL DOMINIC SAVIO KENNEDY DANIEL DOMINIC SAVIO KENNEDY</a>
          </span>
        </div>
        <div class="field">
          <div class="scroll"></div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default App;
