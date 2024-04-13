import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import About from './components/AboutSection';
import Projects from './components/Projects';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      
      <App />
      <div className="plx">
      <ParallaxProvider>
      <About />
      </ParallaxProvider>
      </div>
    
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
