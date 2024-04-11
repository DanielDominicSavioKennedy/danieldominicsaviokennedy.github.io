import React, { useRef, useEffect } from 'react';
import '../css/Achievements.css';
import a1 from '../img/a1.png';
import a2 from '../img/a2.png';
import a3 from '../img/a3.jpg';
import a4 from '../img/a4.jpg';
import a5 from '../img/a5.jpg';
import a6 from '../img/a6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax } from 'react-scroll-parallax';
import Contact from './Contact';

function Achievements  () {
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      const { top } = targetElement.getBoundingClientRect();
      if (top <= window.innerHeight && window.scrollY > 0) {
        // If the top of the target element is within the viewport and user has scrolled down
        window.scrollTo({ top: top - window.innerHeight, behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Parallax speed={15} translateY={[1, -100]} tagOuter="figure">
    <div className="achievements">
      
      <div className="title text-center" style={{ fontFamily: 'Abril Fatface, serif' }}>Achievements</div>
      
      <div className="d-flex justify-content-center align-items-center">
       <p className='line'></p>
      </div>
      
      <div className="d-flex justify-content-center align-items-center">
       <p className='line2'></p>
      </div>

    <div className="main_paper">
      <div class="row">

        <div class="col-md-3">

            <div class="row">
              <h3>CBIT HacktobberFest 2022</h3>
              <img src={a1} alt="" />
              <p>
              Secured top honors with an innovative project amidst fierce competition at CBIT Hacktoberfest, showcasing adept problem-solving and collaboration skills.
              </p>
            </div>

            <div class="row">
              <h3>WebHackathon 2022</h3>
              <img src={a2} alt="" />
              <p>
              Emerged victorious in WebHackathon'22, demonstrating prowess in web development and creative utilization of technologies, highlighting a commitment to excellence.
              </p>
            </div>

            <div class="row">
              <h3>HackForHire</h3>
              <img src={a1} alt="" />
              <p>
              Secured 3rd place in the prestigious HackForHire Hackathon.
Delivered a standout project, garnering recognition for creativity and technical proficiency.
              </p>
            </div>
            
        </div>

        <div class="col-md-6">

          <div class="row">
            <h3>HashItOut 2023</h3>
            <img src={a3} alt="" />
            <p>
            Secured the prestigious runner-up position at Hash it Out 2023, amidst intense competition from talented participants.
Our noteworthy project exemplified resilience and creativity in tackling the challenges presented during the hackathon.
The recognition as the runner-up underscores not only our technical skills but also our ability to adapt and thrive in high-stakes environments, leaving a lasting impression on judges and competitors alike.
</p>
          </div>

          <div class="row">
            <h3>NNRG Hackathon 2023</h3>
            <img src={a5} alt="" />
            <p>
            Clinched the coveted 1st place at the highly competitive NNRG Hackathon 2023.
Demonstrated exceptional innovation and teamwork throughout the event, addressing complex challenges with creative and effective solutions.
Our project not only solved the designated problem statement but also incorporated novel approaches and technologies, setting it apart from competitors.
The success at NNRG Hackathon 2023 not only highlighted technical prowess but also emphasized effective collaboration and communication skills, leaving a lasting impression on judges and peers alike.
            </p>
          </div>

        </div>

        <div class="col-md-3">

            <div class="row">
              <h3>IEEEXtreme 2022</h3>
              <img src={a6} alt="" />
              <p>
              Achieved an outstanding global rank of 192, regional rank of 98, and country rank of 16 in IEEEXtreme 2022.
Demonstrated strong problem-solving skills and dedication to excellence on an international scale.
Highlighted proficiency in competitive programming and ability to deliver under pressure.
              </p>
            </div>

            <div class="row">
              <h3>INNOVASIO 2023</h3>
              <img src={a4} alt="" />
              <p>
              Participated in INNOVATIO Hackathon 2023, demonstrating adept problem-solving and innovation, contributing valuable insights and solutions to the competition.
              </p>
            </div>

            
        </div>
        
      </div>
    </div>
    </div>

<br /><br /><br /><br /><br /><br />
    <div ref={targetRef}>
          <h2></h2>
        </div>


    </Parallax>
  );
}

export default Achievements;