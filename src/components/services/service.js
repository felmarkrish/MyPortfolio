import React from "react";
import "./service.css";
import backendlogo from "../../components/services/images/Rbackend-logo.png";

const Services = () => {
  return (
    <div id="Services-holder" className="forallBG">
      <div className="wrap">
        <div className="Service-container">
          <div className="header-holder">
            <h1>Our Services</h1>
            <p>What i Will do for You</p>
          </div>
          <div className="col-3">
            <div className="box-holder one">
              <div className="box-logo">
                <div className="logo"></div>
              </div>
              <div className="box-content">
                <h4>Graphic Designer</h4>
                <p>
                  Create visual concepts with the goal of attracting the
                  interest of clients through digital and physical designs that
                  typically use graphics, images, art, and other visual
                  elements. Although Graphic Designers may use a variety of
                  tools to create their designs, all Graphic Designers must be
                  able to use their hands at least occasionally to create
                  designs, even if they prefer to rely on their digital skills
                  and graphic design software.
                </p>
                <p>
                  {" "}
                  <a className="btn-more" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="box-holder two">
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
                  {" "}
                  <a className="btn-more" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="box-holder three">
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
                  {" "}
                  <a className="btn-more" href="#">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
