import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import footerlogo from "../../components/footer/image/footer-Logo.png";
import footerbg from "../../components/footer/image/footer-bg.jpg";

const footer = () => {
  return (
    <div id="footer" className="forallBG">
      <img src={footerbg} alt=""></img>
      <div className="wrap">
        <div className="footer-container">
          <div className="col-1 col">
            <img src={footerlogo} alt="footer-logo" title="footer-logo"></img>
            <p>
              © Copyright 2024
              <a href="#home" class="NavMenuListItem smooth-scroll-link">
                My Portfolio
              </a>
              <br></br>
              All rights reserved.
            </p>
          </div>
          {/* end for col-1 */}
          <div className="col-2 col">
            <h4>Services</h4>
            <p>Desktop-app Developer</p>
            <p>WordPress Developer</p>
            <p>Front-end Developer</p>
          </div>
          {/* end for col-2 */}
          <div className="col-3 col">
            <h4>Contact Information</h4>
            <p>
              <label>phone:</label>+63 9973757039
            </p>
            <p>
              <label>email:</label>
              <Link
                to="Contact-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="NavMenuListItem smooth-scroll-link">
                felmarkrish@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
