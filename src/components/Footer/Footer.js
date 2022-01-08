import React from "react";
import githubLogo from "../../assets/FooterImages/red_iconmonstr-github-3-48.png";
import linkedInLogo from "../../assets/FooterImages/red_iconmonstr-linkedin-3-48.png";
import InstaLogo from "../../assets/FooterImages/red_iconmonstr-instagram-1-48.png";
import './Footer.css';

const Footer = () => (
  <div className="footerStyle">
    <a href="https://github.com/izztnkr" target="_blank">
      <img src={githubLogo}></img>
    </a>
    <a href="https://www.linkedin.com/in/izzy-ramirez-izztnkr/" target="_blank">
      <img src={linkedInLogo}></img>
    </a>
    <a href="https://www.instagram.com/thinkntink/" target="_blank">
      <img src={InstaLogo}></img>
    </a>
  </div>
);

export default Footer;
