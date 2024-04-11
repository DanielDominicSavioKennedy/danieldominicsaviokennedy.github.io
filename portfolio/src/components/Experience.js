import React from 'react';
import "../css/Experience.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()

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
        <h3 className='a'> Web Developer Intern</h3>
        <p>Fed 2023 – June 2023</p>
        <p>WebLaunch Remote</p>
        <ul>
          <li>Designed and developed dynamic, responsive websites using Figma for UI/UX design.</li>
          <li>Utilized Django for backend development, ensuring robust and scalable functionality.</li>
          <li>Implemented RESTful APIs to facilitate seamless data exchange between frontend and backend systems, ensuring optimal performance and integration.</li>
        </ul>
       </div>
      </lia>
    </li>

    <li className='lie' style={{marginTop:'-1.5em'}}>
      <div class="bullet">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><circle stroke="none" cx="16" cy="16" r="10"></circle></svg>
      </div>
      <lia data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
       <div className="job">
        <h3 className='b'>Product Developer</h3>
        <p>May 2022 – Oct 2022</p>
        <p>InnovatioHub Remote</p>
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
