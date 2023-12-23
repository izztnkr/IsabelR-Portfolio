import React from "react";
import isabelResume from "../../../assets/Resume/Isabel_Ramirez_Resume.pdf";
import './Resume.css';
const Resume = () => (
  <div className="page">
    <h1 className="title">Resume</h1>
    <div className="resumeItems">
    <br></br>
    <div className="resumeDownload">
    <a  href={isabelResume}>Click here to download my Resume! </a>
    </div>
    &nbsp;
    <h4>Languages</h4>
    <p>HTML, CSS, Javascript, Markdown</p>
    &nbsp;
    <h4>Frameworks, Platforms, and Libraries</h4>
    <p>Bootstrap, Bulma, Express.js, Insomnia, jQuery, NPM, Node.js REACT, Webpack</p>
    &nbsp;
    <h4>Databases</h4>
    <p>MongoDB, MySQL, NoSQL</p>
    &nbsp;
    <h4>ORM</h4>
    <p>Sequelize</p>
    &nbsp;
    <h4>Testing</h4>
    <p>Jest, Litmus</p>
    &nbsp;
    <h4>Hosting</h4>
    <p>Heroku, Wordpress</p>
    &nbsp;
    <h4>Code Editors and Version Control</h4>
    <p>Visual Studio Code, GitHub</p>
    &nbsp;
    &nbsp;
    <h4>Visual Editors</h4>
    <p>beefree, Adobe Photoshop</p>
    &nbsp;
    &nbsp;
    <h4>Email Service Providers</h4>
    <p>Salesforce Marketing Cloud, Pardot, Mailchimp, Hubspot, Blackbaud Convio Luminate, Campaign Monitor</p>
    &nbsp;
    &nbsp;
    <h4>Tag Managers</h4>
    <p>Google Tag Manager, PiwikPro</p>
    &nbsp;
    &nbsp;
    <h4>Documentation & Productivity</h4>
    <p>Notion, Slack, Google Suite, Office Suite</p>
    &nbsp;
    &nbsp;
    </div>
  </div>
);

export default Resume;
