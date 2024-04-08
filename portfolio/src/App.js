import './App.css';
import { Image } from 'react-bootstrap';
import Navbar_h from './Navbar';
import testImage from './p_img.png'; // Import the image file
import { TypeAnimation } from 'react-type-animation';


function App() {
  return (
    <div className="App">
    <div className="cname">
      <div className="name" style={{ display: 'inline-block' }}>    
        <p style={{ display: 'inline'}}>Daniel Dominic Savio Kennedy, </p>
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
    </div>
      <div  className="Appm">
        
        <div className="ccontainer">
         <img src={testImage} fluid className="cimage" />
        </div>
        <div className="marquee">
          <span>
            <a style={{fontFamily: 'Abril Fatface, serif' }}>DANIEL DOMINIC SAVIO KENNEDY  DANIEL DOMINIC SAVIO KENNEDY  DANIEL DOMINIC SAVIO KENNEDY  DANIEL DOMINIC SAVIO KENNEDY  DANIEL DOMINIC SAVIO KENNEDY</a>
          </span>
        </div>
       
        <div class="field">
          <div class="scroll"></div>
        </div>

      </div>
      


    </div>

  );
}
export default App;

