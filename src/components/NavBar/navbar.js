import React from "react";
import "./navbar.css";
import logo from "../../assets/portfolioLogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="portfolio-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="NavMenu">
        <a href="#" className="NavMenuListItem">
          Home
        </a>
        <a href="#Aboutme-Parent" className="NavMenuListItem">
          About
        </a>
        <a href="#Services-holder" className="NavMenuListItem">
          Services
        </a>
        <a href="#Gallery-holder" className="NavMenuListItem">
          Gallery
        </a>
        <a href="#mySports-Container" className="NavMenuListItem">
          Sports
        </a>
        <a href="#Contact-container" className="NavMenuListItem">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
