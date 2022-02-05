import React from "react";
import isabelResume from "../../../assets/Resume/isabelResume.pdf";
import './Resume.css';
const Resume = () => (
  <div className="title">
    <h1>Resume</h1>
    <br></br>
    <a href={isabelResume}>Click here to download my Resume! </a>
    <br></br>
    &nbsp;
    <h4>Languages</h4>
    <p>HTML, CSS, Javascript, Markdown</p>
    &nbsp;
    <h4>Frameworks, Platforms, and Libraries</h4>
    <p>Bootstrap, Express.js, Insomnia, jQuery, NPM, Node.js REACT, Webpack</p>
    &nbsp;
    <h4>Databases</h4>
    <p>MongoDB, MySQL, NoSQL</p>
    &nbsp;
    <h4>ORM</h4>
    <p>Sequelize</p>
    &nbsp;
    <h4>Testing</h4>
    <p>Jest</p>
    &nbsp;
    <h4>Hosting</h4>
    <p>Heroku</p>
    &nbsp;
    <h4>Editors and Version Control</h4>
    <p>Visual Studio Code, GitHub</p>
    &nbsp;
    &nbsp;
  </div>
);

export default Resume;
