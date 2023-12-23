import React from "react";
import izzyImage from "../../../assets/AboutMe/izzyImage.jpg";
import Bootstrap from "../../../assets/AboutMe/icons8-bootstrap-24.png";
import Bulma from "../../../assets/AboutMe/bulma.png";
import Express from "../../../assets/AboutMe/express.png";
import Heroku from "../../../assets/AboutMe/icons8-heroku-32.png";
import Insomnia from "../../../assets/AboutMe/icons8-javascript-64.png";
import JavaScript from "../../../assets/AboutMe/icons8-javascript-48.png";
import MongoDB from "../../../assets/AboutMe/icons8-mongodb-48.png";
import NodeJS from "../../../assets/AboutMe/icons8-nodejs-48.png";
import ReactIcon from "../../../assets/AboutMe/icons8-react-50.png";
import isabelResume from "../../../assets/Resume/Isabel_Ramirez_Resume.pdf";

import "./About.css";

const About = () => (
  <div className="page">
    <h1 className="title">About Me</h1>
    <img src={izzyImage} alt="headshot" />
    <div className="about">
      <h5 className="bio">
        Hola! My name is Isabel Ramirez, I sometimes go by Izzy. I am a bilingual Front-End Developer in the Austin Metropolitan Area. When not solving problems through code and communication, I'm focused on physical well-being and moving the needle on local environmental issues.
        
        Creativity and curiosity lead my day to day which usually involves learning new technologies on the fly to test, debug and communicate solutions. My aim is to engage the technology with those around me for an impactful and enriching end user experience. I’m excited to leverage my skills as part of an innovative and quality-driven team locally and abroad.

      </h5>
      <div>
        <a href="https://getbootstrap.com/" target="_blank"><img src={Bootstrap} alt="Bootstrap logo" title="Bootstrap logo"/></a>
        <a href="https://www.javascript.com/" target="_blank"><img src={JavaScript} alt="JavaScript logo" title="Javascript logo" /></a>
        <a href="https://www.mongodb.com/" target="_blank"><img src={MongoDB} alt="MongodDB logo" title="MongoDB logo" /></a>
        {/* <img src={Express} alt="Express logo" /> */}
        <a href="https://react.dev/" target="_blank"><img src={ReactIcon} alt="React logo" title="React logo"/></a>
        <a href="https://nodejs.org/en" target="_blank"><img src={NodeJS} alt="NodeJS logo" title="NodeJS logo" /></a>
        <a href="https://www.heroku.com/" target="_blank"><img src={Heroku} alt="Heroku logo" title="Heroku logo" /></a>
      </div>
      <div className="resumeDownload">
        <a href={isabelResume}>Click here to download my Resume! </a>
      </div>
    </div>
  </div>
);

export default About;
