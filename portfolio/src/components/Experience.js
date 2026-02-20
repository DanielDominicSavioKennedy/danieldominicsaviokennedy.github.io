import React from 'react';
import "../css/Experience.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  once: false,
  mirror: true,
  offset: 190,
});

const Experience = () => {
  return (
    <div className='experience' data-aos="fade-right" data-aos-offset="3" data-aos-easing="ease-in-sine"> 
      <p className='experience__title ' style={{fontFamily: 'Abril Fatface, serif', margin:'0' }}> Experience</p>
      <br/>

    <ul className='ule'>

    <li className='lie'>
      <div class="bullet">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
      </div>
      <lia data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
       <div className="job">
        <h3 className='a'> Associate Software Engineer </h3>
        <p>Aug 2024 – Nov 2025</p>
        <p className='h5'>Accenture </p>
        <ul>
          <li>Developed and deployed intelligent agents using AWS Bedrock for automating SSA assignments and ServiceNow ticket analysis.</li>
          <li>Designed and implemented multi-agent collaboration, enabling seamless communication between agents for enhanced task automation.</li>
          <li>Engineered inline agents for dynamic agent configuration, optimizing workflow adaptability.</li>
        </ul>
       </div>
      </lia>
    </li>

    <li className='lie'>
      <div class="bullet">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
      </div>
      <lia data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
       <div className="job">
        <h3 className='a'> AI Engineer Intern</h3>
        <p>March 2024 – July 2024</p>
        <p className='h5'>AICHANGE</p>
        <ul>
          <li>Performed Data Analysis and Document Information Extraction, integrating GPT wrappers for enhanced insights.</li>
          <li>Developed question-answering and data analytics projects using LLM models with LangChain, improving response accuracy and data-driven decision-making.</li>
          <li>Built MVP frontends with Streamlit and deployed solutions using Flask, ensuring seamless user experience.</li>
        </ul>
       </div>
      </lia>
    </li>

    <li className='lie'>
      <div class="bullet">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
      </div>
      <lia data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
       <div className="job">
        <h3 className='a'> Web Developer Intern</h3>
        <p>Fed 2023 – June 2023</p>
        <p className='h5'>WebLaunch</p>
        <ul>
          <li>Designed and developed dynamic, responsive websites using Figma for UI/UX design.</li>
          <li>Utilized Django for backend development, ensuring robust and scalable functionality.</li>
          <li>Implemented RESTful APIs to facilitate seamless data exchange between frontend and backend systems, ensuring optimal performance and integration.</li>
        </ul>
       </div>
      </lia>
    </li>

    <li className='lie' style={{marginTop:'-1.5em'}}>
      <div class="bullet bullet2">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
      </div>
      <lia data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
       <div className="job">
        <h3 className='b'>Product Developer</h3>
        <p>May 2022 – Oct 2022</p>
        <p className='h5'>InnovatioHub</p>
        <ul>
          <li>Led a 6-member team in developing a home automation prototype using the Scrum framework.</li>
          <li>Collaborated on hardware integration, utilizing Arduino, Raspberry Pi, Sensors and embedded C.</li>
          <li>Implemented iterative sprints to achieve incremental progress and align with project goals.</li>
          <li>Successfully delivered a functional prototype enabling remote device control and monitoring.</li>
        </ul>
      </div>
     </lia>
    </li>    
    </ul>
    
    </div>
  );
}

export default Experience;
