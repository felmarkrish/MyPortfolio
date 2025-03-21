/* global $ */

import React, { useEffect } from "react";
import "./gallery.css";
import "./gallery.min.style.css";
// import gal1 from "../../components/Galleries/images/pic1.jpg";
// import gal2 from "../../components/Galleries/images/gal-2.jpg";
// import gal3 from "../../components/Galleries/images/gal-3.jpg";
// import gal4 from "../../components/Galleries/images/gal-4.png";
// import gal5 from "../../components/Galleries/images/gal-5.jpg";
// import gal6 from "../../components/Galleries/images/gal-6.jpg";
import pic1 from "../../components/Galleries/images/pic1.jpg";
import pic2 from "../../components/Galleries/images/pic2.jpg";
import pic3 from "../../components/Galleries/images/pic3.jpg";
import pic4 from "../../components/Galleries/images/pic4.jpg";
import pic5 from "../../components/Galleries/images/pic5.jpg";
import pic6 from "../../components/Galleries/images/pic6.jpg";
import pic7 from "../../components/Galleries/images/pic7.jpg";
import pic8 from "../../components/Galleries/images/pic8.jpg";
import pic9 from "../../components/Galleries/images/pic9.jpg";
import pic10 from "../../components/Galleries/images/pic10.jpg";
import pic11 from "../../components/Galleries/images/pic11.jpg";
import pic12 from "../../components/Galleries/images/pic12.jpg";
import pic13 from "../../components/Galleries/images/pic13.jpg";
import pic14 from "../../components/Galleries/images/pic14.jpg";
import pic15 from "../../components/Galleries/images/pic15.jpg";
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
                <img src={pic1} alt="man" title="gal-1" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic2} alt="man" title="gal-2" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic3} alt="man" title="gal-3" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic4} alt="man" title="gal-4" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic5} alt="man" title="gal-5" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic6} alt="man" title="gal-6" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic7} alt="man" title="gal-7" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic8} alt="man" title="gal-8" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic9} alt="man" title="gal-9" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic10} alt="man" title="gal-10" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic11} alt="man" title="gal-11" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic12} alt="man" title="gal-12" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic13} alt="man" title="gal-13" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic14} alt="man" title="gal-14" className="img"></img>
                <h5>Photo</h5>
              </div>
              <div className="carousel-item">
                <img src={pic15} alt="man" title="gal-15" className="img"></img>
                <h5>Photo</h5>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
