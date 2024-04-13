import React from 'react';
import '../css/App.css';
import { TypeAnimation } from 'react-type-animation';
import testImage from '../img/p_sketch.png';
import {BsFileEarmarkPdf} from 'react-icons/bs';

function App() {

  return (
    <div className="main">
    <div className="App">
      
      <div className="cname">
        <div className="name" style={{ display: 'inline-block' }}>
          <p style={{ fontFamily: 'Abril Fatface, serif' }} className='text_data' >Daniel Dominic Savio Kennedy | </p>
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
        <div style={{padding: '18px', margin: '10px',display: 'inline-flex'  }}>
        <a href="https://drive.google.com/file/d/19LrtIPMwCWGDRKa4osClyPYeCWhob6Ci/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='resume-link '><BsFileEarmarkPdf  /><p>Resume</p></a>
          
        </div>
      </div>
      <div className="Appm">
        <div className="ccontainer" >
          <img src={testImage} fluid className="cimage" />
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
