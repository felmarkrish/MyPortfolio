import React from "react";
import "./revslider.css";
import logo from "../../components/revsliders/image/RevsliderBG2.jpg";
import profilelogo from "../../components/revsliders/image/HackerProfile.png";
import videobg from "../../assets/video-bg4.mp4";
// import { Link } from 'react-scroll';

const Revslider = () => {
  return (
    <div id="home" className="revslider-holder">
      <video src={videobg} autoPlay loop muted width="100%" height="100%" />
      <img src={logo} alt="" className="revsliderlogo" />
      <div className="ProfileLogo">
        <img src={profilelogo} alt="" className="profilelogo" />
      </div>
      <div className="revsliderText">
        <h1>
          <span>Hello,</span>
          <span>
            I'm <label>Felmarkrish</label>
          </span>
          <span>Website Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Revslider;
