import React from "react";
import izzyImage from "../../../assets/AboutMe/izzyImage.jpg";
import "./About.css";

const About = () => (
  <div className="title">
    <h1>About Me</h1>
    <img src={izzyImage} alt="headshot" />
    <div className="bio">
      <p>
        &nbsp;&nbsp;&nbsp;Hola! My name is Izzy Ramirez and I am a full-stack
        web developer with a science, music, and art background. In other words,
        I make cool programmer things inspired by the world around me. I am open
        for interesting projects and collaborations.
      </p>
    </div>
  </div>
);

export default About;