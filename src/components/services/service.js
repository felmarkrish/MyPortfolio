import React from "react";
import "./service.css";
import backendlogo from "../../components/services/images/Rbackend-logo.png";
import videobg from "../../assets/video-bg5.mp4";
// motion
import { motion } from "framer-motion";
//variant for motion
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <div id="Services-holder" className="forallBG">
      <div className="wrap">
        <div className="Service-container">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="header-holder">
            <h1>Our Services</h1>
            <p>What i Will do for You</p>
          </motion.div>
          <div className="col-3">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="box-holder one">
              {/* <video
                src={videobg}
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
              /> */}
              <div className="box-logo">
                <div className="logo"></div>
              </div>
              <div className="box-content">
                <h4>Desktop-app Developer</h4>
                <p>
                  Creating an application locally for computer devices
                  (operating systems) is referred to as desktop application
                  development. Desktop app developers build these applications
                  that are used specifically on laptops and desktops. A desktop
                  application can be defined as a program that is installed or
                  runs directly on the system. It can be called from the GUI or
                  a terminal window by double-clicking on its icon, which will
                  open up its main window. Assessing and using the desktop
                  application is a straightforward process.
                </p>
                <p>
                  <a
                    className="btn-more"
                    href="https://radixweb.com/blog/desktop-application-development-guide"
                    target="_blank"
                    rel="noopener noreferrer">
                    Read More
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="box-holder two">
              {/* <video
                src={videobg}
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
              /> */}
              <div className="box-logo">
                <div className="logo"></div>
              </div>
              <div className="box-content">
                <h4>WordPress Developer</h4>
                <p>
                  play a crucial role in building and maintaining the
                  functionality of WordPress-based websites. You will be
                  responsible for the server-side development, ensuring seamless
                  integration of front-end components and optimal performancel,
                  Design and develop custom WordPress plugins to extend and
                  enhance website functionality, ensuring compatibility with the
                  latest WordPress versions, Collaborate with front-end
                  developers to implement and customize WordPress themes based
                  on design requirements, ensuring responsive and user-friendly
                  layouts.
                </p>
                <p>
                  <a
                    className="btn-more"
                    href="https://www.coursera.org/articles/wordpress-developer"
                    target="_blank"
                    rel="noopener noreferrer">
                    Read More
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="box-holder three">
              {/* <video
                src={videobg}
                autoPlay
                loop
                muted
                width="100%"
                height="100%"
              /> */}
              <div className="box-logo">
                <div className="logo"></div>
              </div>
              <div className="box-content">
                <h4>Front-end Developer</h4>
                <p>
                  To serve and have the ability to take concepts of the design
                  and build beautiful websites to the clients on Wordpress and
                  other platforms. also a multi-disciplinary with a goal to help
                  serve the clients with powerful, beautiful and functional
                  websites that grow their business. smart development, data,
                  research and a continually renewed process to help work more
                  intelligently each and every day..
                </p>
                <p>
                  <a
                    className="btn-more"
                    href="https://www.coursera.org/articles/front-end-developer"
                    target="_blank"
                    rel="noopener noreferrer">
                    Read More
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
