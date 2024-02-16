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
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          Home
        </Link>
        <Link
          to="Aboutme-Parent"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          About
        </Link>
        <Link
          to="Services-holder"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          Services
        </Link>
        <Link
          to="Gallery-holder"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          Gallery
        </Link>
        <Link
          to="mySports-Container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          Sports
        </Link>
        <Link
          to="Contact-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="NavMenuListItem smooth-scroll-link">
          Contact
        </Link>
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
