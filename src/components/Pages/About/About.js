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
        Hola! My name is Izzy Ramirez and I am a bilingual full-stack web
        developer with a science, music, and art background. In other words, I
        make cool programmer things inspired by the world around me. 
        
        Known as a creative problem solver and team player curious about all things, with a focus on integrating technologies. My aim is to best engage my audience for an impactful and enriching user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences.

      </h5>
      <div>
        <img src={Bootstrap} alt="Bootstrap logo" />
        <img src={JavaScript} alt="JavaScript logo" />
        <img src={MongoDB} alt="MongodDB logo" />
        {/* <img src={Express} alt="Express logo" /> */}
        <img src={ReactIcon} alt="React logo" />
        <img src={NodeJS} alt="NodeJS logo" />
        <img src={Heroku} alt="Heroku logo" />
      </div>
      <div className="resumeDownload">
        <a href={isabelResume}>Click here to download my Resume! </a>
      </div>
    </div>
  </div>
);

export default About;
