import React from 'react';
import '../css/Projects.css'
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import p5 from '../img/p5.png';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {

  return (
    <>
    <div className="mainP">
    <div class="scrolling-wrapper">
    <div class="main_c" ><p style={{fontFamily: 'Abril Fatface, serif' }}>Projects</p> <svg width="172" height="12" viewBox="0 0 172 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.000202232 6.03614L10.0348 11.7493L9.96524 0.202505L0.000202232 6.03614ZM171.994 4.00002L8.99401 4.98195L9.00606 6.98191L172.006 5.99998L171.994 4.00002Z" fill="black"/>
</svg> swipe left
</div>
    
    <div className="cardC sub_main_c" >
        <h2></h2>
        <p></p>
    </div>
    <div class="cardC" style={{backgroundImage: `url(${p4})`}}>
      <div className="hiddenText">
        <h2>Unityutopia</h2>
        <p>A group chat application built using<br /> django with  inbuilt abusive word <br /> filtering</p>
        <a href="https://github.com/DanielDominicSavioKennedy/UnityUtopia" target="_blank" rel="noopener noreferrer" className="custom-link">
            GitHub Repository <FaExternalLinkAlt />
        </a>
      </div>
    </div>
    <div class="cardC" style={{backgroundImage: `url(${p2})`}}>
      <div className="hiddenText">
        <h2>Lingusitic Sensitivity <br />Upgrade</h2>
        <p>An ML model built by finetuning BERT<br /> designed to censor abusive words in a <br /> given text.</p>
        <a href="https://github.com/DanielDominicSavioKennedy/LINGUISTIC-SENSITIVITY-UPGRADE" target="_blank" rel="noopener noreferrer" className="custom-link">
            GitHub Repository <FaExternalLinkAlt />
        </a>
      </div>
    </div>
    <div class="cardC" style={{backgroundImage: `url(${p3})`}}>
      <div className="hiddenText">
        <h2>Notify</h2>
        <p>a web application built using Flask that <br />predicts and sends messages <br />to women about their period dates.</p>
        <a href="https://github.com/DanielDominicSavioKennedy/notify" target="_blank" rel="noopener noreferrer" className="custom-link">
            GitHub Repository <FaExternalLinkAlt />
        </a>
      </div>
    </div>
    <div class="cardC" style={{backgroundImage: `url(${p5})`}}>
      <div className="hiddenText">
        <h2>Smart Hut</h2><br />
        <p>A project for automating home switches <br /> using a website interface and <br />a NodeMCU cluster.</p>
        <a href="https://github.com/DanielDominicSavioKennedy/Smart-Hut" target="_blank" rel="noopener noreferrer" className="custom-link">
            GitHub Repository <FaExternalLinkAlt />
        </a>
      </div>
    </div>
    <div class="cardC" style={{backgroundImage: `url(${p1})`}}>
      <div className="hiddenText">
        <h2>genre</h2>
        <p>a web application built using Django and <br /> K-Nearest Neighbors (KNN) algorithm for <br /> predicting  the genre of music based on <br /> input audio files.</p>
        <a href="https://github.com/DanielDominicSavioKennedy/genre" target="_blank" rel="noopener noreferrer" className="custom-link">
            GitHub Repository <FaExternalLinkAlt />
        </a>
      </div>
      
    </div>
  </div>
  </div>
    </>
  );
}
