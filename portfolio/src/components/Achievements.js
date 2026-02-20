import '../css/Achievements.css';
import a1 from '../img/a1.png';
import a2 from '../img/a2.png';
import a3 from '../img/a3.jpg';
import a4 from '../img/a4.jpg';
import a5 from '../img/a5.jpg';
import a6 from '../img/a6.jpg';
import a7 from '../img/a7.jpg';
import iccce from '../img/ICCCE_Cover.jpg';
import iccce_pp from '../img/ICCCE_pp.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaExternalLinkAlt } from "react-icons/fa";

AOS.init()


function Achievements  () {

  const today = new Date();

  return (
    <div className="achievements" data-aos="fade-up">
      
      <div className="title text-center" style={{ fontFamily: 'Abril Fatface, serif' }}>Achievements</div>
      
      <div className="d-flex justify-content-center align-items-center">
       <p className='line'></p>
      </div>

      <div className="d-flex justify-content-center align-items-center pb-2">
        <div className="text-muted small" class="fw-bold">
          {today.getFullYear()} |{" "}
          {today.toLocaleString("en-US", { month: "short" })} |{" "}
          {today.toLocaleString("en-US", { weekday: "long" })} |{" "}
          {today.getDate()}
        </div>
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
              <img src={a7} alt="" />
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

            <div class="row">
              <h3>ICCCE Publication (2024)</h3>
              <div class="col-md-3">
              In 2024, I had the opportunity to present my research paper, “Linguistic Sensitivity Upgrade: AI-Enabled Normalization of Offensive Text,” at the International Conference on Communications and Cyber Physical Engineering 2024. The paper was published in the Proceedings of the 7th International Conference on Communications and Cyber Physical Engineering and explores the use of artificial intelligence and natural language processing techniques to identify, normalize, and mitigate offensive language in digital communication. The research emphasizes the importance of ethical AI and linguistic sensitivity in designing responsible, inclusive, and socially aware communication systems, highlighting AI’s growing role in shaping safer online interactions.
              <br /> <a href="https://link.springer.com/chapter/10.1007/978-981-95-0269-1_204"  rel="noopener noreferrer" style={{ color: 'inherit' }}>
                SpringerLink <FaExternalLinkAlt />
               </a>
              </div>

              <div class="col-md-6">
              <p>
              <img src={iccce_pp} alt="" />
              </p>
              </div>
              <div class="col-md-3">
                <img src={iccce} alt="" />
              </div>
            </div>
        
      </div>
    </div>
    </div>


  );
}

export default Achievements;