import React from "react";
import "./Footer.css";
// import footer_logo from '../../assets/footer_logo.svg'
import emailIcon from "../../assets/emailIcon.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <h1>Saloni</h1>
          <p>
            I am a Software Developer with expertise in HTML, CSS, JavaScript,
            React, React Native, Node.js, and Express.js. As a{" "}
            <strong>Salesforce Certified professional</strong>, I specialize in
            building efficient, user-friendly applications and integrating them
            with robust CRM solutions to deliver comprehensive digital
            experiences.
          </p>{" "}
        </div>
        <div className="footer-top-right">
          <a href="https://github.com/SaloniThete">
            <img src={github} alt="GitHub" />
          </a>

          <a
            href="mailto:saloni662001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={emailIcon} alt="Email" />
          </a>

          <a
            href="https://www.linkedin.com/in/salonithete/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2026 Saloni Thete. All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
