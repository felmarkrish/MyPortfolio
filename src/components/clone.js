import React from "react";
import { Link } from "react-scroll";

const NavContainerClone = () => {
  return (
    <div className="nav-container">
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
  );
};

export default NavContainerClone;
