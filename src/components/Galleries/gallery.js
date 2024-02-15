/* global $ */

import React, { useEffect } from "react";
import "./gallery.css";
import "./gallery.min.style.css";
import gal1 from "../../components/Galleries/images/gal-1.jpg";
import gal2 from "../../components/Galleries/images/gal-2.jpg";
import gal3 from "../../components/Galleries/images/gal-3.jpg";
import gal4 from "../../components/Galleries/images/gal-4.png";
import gal5 from "../../components/Galleries/images/gal-5.jpg";
import gal6 from "../../components/Galleries/images/gal-6.jpg";
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
        <div className="Gallery-container">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>
            Galleries
          </motion.h1>
          <div className="for-ornament">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="carousel">
              <div className="carousel-item">
                <img src={gal1} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 1</h5>
              </div>
              <div className="carousel-item">
                <img src={gal2} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 2</h5>
              </div>
              <div className="carousel-item">
                <img src={gal3} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 3</h5>
              </div>
              <div className="carousel-item">
                <img src={gal4} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 4</h5>
              </div>
              <div className="carousel-item">
                <img src={gal5} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 5</h5>
              </div>
              <div className="carousel-item">
                <img src={gal6} alt="man" title="hacker" className="img"></img>
                <h5>Hacker 6</h5>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
