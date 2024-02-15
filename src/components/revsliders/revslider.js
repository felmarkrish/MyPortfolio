import React from "react";
import "./revslider.css";
import logo from "../../components/revsliders/image/RevsliderBG2.jpg";
import profilelogo from "../../components/revsliders/image/HackerProfile.png";
import videobg from "../../assets/video-bg4.mp4";
// import { Link } from 'react-scroll';
// motion
import { motion } from "framer-motion";
//variant for motion
import { fadeIn } from "../variants";

const Revslider = () => {
  return (
    <div id="home" className="revslider-holder">
      <video src={videobg} autoPlay loop muted width="100%" height="100%" />
      <img src={logo} alt="" className="revsliderlogo" />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="ProfileLogo">
        <img src={profilelogo} alt="" className="profilelogo" />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="revsliderText">
        <h1>
          <span>Hello,</span>
          <span>
            I'm <label>Felmarkrish</label>
          </span>
          <span>Website Developer</span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Revslider;
