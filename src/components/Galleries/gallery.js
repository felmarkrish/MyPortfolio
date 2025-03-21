/* global $ */

import React, { useEffect } from "react";
import "./gallery.css";
import "./gallery.min.style.css";
import pic1 from "../../components/Galleries/images/strongguard.jpg";
import pic2 from "../../components/Galleries/images/spendrups.jpg";
import pic3 from "../../components/Galleries/images/malykke.jpg";
import videobg from "../../assets/video-bg2.mp4";
// motion
import { motion } from "framer-motion";
//variant for motion
import { fadeIn } from "../variants";

const Gallery = () => {
  useEffect(() => {
    let carouselInterval;

    $(document).ready(function () {
      // Initialize the carousel after the component mounts
      $(".carousel").carousel();

      // Start autoplay
      carouselInterval = setInterval(function () {
        $(".carousel").carousel("next");
      }, 12000); // every 12 seconds

      // Pause autoplay on hover
      $(".carousel-item").on("mouseenter", function () {
        clearInterval(carouselInterval);
      });

      // Resume autoplay on mouse leave
      $(".carousel-item").on("mouseleave", function () {
        carouselInterval = setInterval(function () {
          $(".carousel").carousel("next");
        }, 12000); // every 12 seconds
      });
    });

    // Clean up the interval on component unmount
    return () => clearInterval(carouselInterval);
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div id="Gallery-holder" className="forallBG">
      <div className="wrap">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="Gallery-container">
          <video src={videobg} autoPlay loop muted width="100%" height="100%" />
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}>
            My projects
          </motion.h1>
          <div className="for-ornament">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="carousel">
              <div className="carousel-item">
                <img src={pic1} alt="strongguard" title="strongguard" className="img"></img>
                <h5><a href="https://strongguard.dk/" target="_blank" rel="noopener noreferrer">Strongguard</a></h5>
              </div>
              <div className="carousel-item">
                <img src={pic2} alt="spendrups" title="spendrups" className="img"></img>
                <h5> <a href="https://spendrups.dk/" target="_blank" rel="noopener noreferrer">Spendrups Foto</a></h5>
              </div>
              <div className="carousel-item">
                <img src={pic3} alt="malykke" title="malykke" className="img"></img>
                <h5> <a href="https://malykke.dk/" target="_blank" rel="noopener noreferrer" >Malykke</a></h5>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
