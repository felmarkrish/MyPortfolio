import React from "react";
import "./aboutme.css";
import aboutlogo from "../../components/aboutme/images/hacker_PNG.png";
import aboutlogos from "../../components/aboutme/images/profile22.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import videobg from "../../assets/video-bg5.mp4";
// motion
import { motion } from "framer-motion";
//variant for motion
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div id="Aboutme-Parent" className="forallBG">
      <div className="wrap">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="Aboutme-Header">
          <h1>About Me</h1>
        </motion.div>
        <div className="Aboutme-Holder">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="textAboutme col-2">
            <video
              src={videobg}
              autoPlay
              loop
              muted
              width="100%"
              height="100%"
            />
            <p>Hello, Welcome</p>
            <h2>I'm Felmarkrish Clavecilla</h2>
            <p>
              I am outgoing, dedicated, and open-minded. I get across to people
              and adjust to changes with ease. I believe that a person should
              work on developing their professional skills and learning new
              things all the time. Currently, I am looking for new career
              opportunities my current job position cannot provide.
            </p>
            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}>
              <a href="tel +63 9973757039">
                <FontAwesomeIcon icon={faPhone} />
                +63 9973757039
              </a>
              <a
                className="NavMenuListItem smooth-scroll-link"
                href="#Contact-container">
                <FontAwesomeIcon icon={faMessage} />
                Send Message
              </a>
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="About-ImgHolder col-2">
            <img
              src={aboutlogos}
              alt="itsme"
              title="Felmarkrish"
              className="About-Img"></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
