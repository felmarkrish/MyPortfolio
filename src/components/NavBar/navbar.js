import React, { useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/portfolioLogo.png";
import { Link } from "react-scroll";
import NavContainerClone from "../clone";

const Navbar = () => {
  useEffect(() => {
    const button_active = document.querySelector(".hamburger-menu");
    const handleAppclass = document.querySelector(".App");
    const mobilenav = document.querySelector(".mobile-navigation");

    const handleHamburgerClick = () => {
      button_active.classList.toggle("is-active");
      handleAppclass.classList.toggle("is-click");
      mobilenav.classList.toggle("is-visible");
    };

    button_active.addEventListener("click", handleHamburgerClick);

    // Check screen width on resize
    const handleResize = () => {
      if (window.innerWidth > 660) {
        // If screen width is above 660px, remove is-click class and hide mobile navigation
        handleAppclass.classList.remove("is-click");
        mobilenav.classList.remove("is-visible");
        button_active.classList.remove("is-active");
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listeners when the component unmounts
    return () => {
      button_active.removeEventListener("click", handleHamburgerClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <nav className="navbar">
      <div className="portfolio-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="NavMenu">
        <a href="#home" className="NavMenuListItem smooth-scroll-link">
          Home
        </a>
        <a
          href="#Aboutme-Parent"
          className="NavMenuListItem smooth-scroll-link">
          About
        </a>
        <a
          href="#Services-holder"
          className="NavMenuListItem smooth-scroll-link">
          Services
        </a>
        <a
          href="#Gallery-holder"
          className="NavMenuListItem smooth-scroll-link">
          Gallery
        </a>
        <a
          href="#mySports-Container"
          className="NavMenuListItem smooth-scroll-link">
          Sports
        </a>
        <a
          href="#Contact-container"
          className="NavMenuListItem smooth-scroll-link">
          Contact
        </a>
      </div>
      <div className="hamburger-menu">
        <div className="mobile-nav-container">
          <div className="clone-here">{/* <NavContainerClone /> */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
