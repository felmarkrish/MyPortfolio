import React from "react";
import "./aboutme.css";
import aboutlogo from "../../components/aboutme/images/hacker_PNG.png";
import aboutlogos from "../../components/aboutme/images/profile22.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div id="Aboutme-Parent" className="forallBG">
      <div className="wrap">
        <div className="Aboutme-Header">
          <h1>About Me</h1>
        </div>
        <div className="Aboutme-Holder">
          <div className="textAboutme col-2">
            <p>Hello, Welcome</p>
            <h2>I'm Felmarkrish Clavecilla</h2>
            <p>
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to changes with ease. I believe that a person should
              work on developing their professional skills and learning new
              things all the time. Currently, I am looking for new career
              opportunities my current job position cannot provide.
            </p>
            <p>
              <a href="tel +63 9973757039">
                <FontAwesomeIcon icon={faPhone} />
                +63 9973757039
              </a>
              <a href="#Contact-container">
                <FontAwesomeIcon icon={faMessage} />
                Send Message
              </a>
            </p>
          </div>
          <div className="About-ImgHolder col-2">
            <img src={aboutlogos} className="About-Img"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
