import React from "react";
import "./style.css";

// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <section className="portfolioCards">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <h3 className="projectTitle">{props.name}</h3>
          <br></br>
          <strong>Description:</strong>
          <p> {props.description}</p>
          <div>
            <strong>Technologies:</strong>
          </div>
          <p> {props.techType} </p>
          <div className="technologies">
            <img className="icons" src={props.tech1} />
            <img className="icons" src={props.tech2} />
            <img className="icons" src={props.tech3} />
            <img className="icons" src={props.tech4} />
            <img className="icons" src={props.tech5} />
            <img className="icons" src={props.tech6} />
            <img className="icons" src={props.tech7} />
            <img className="icons" src={props.tech8} />
            <img className="icons" src={props.tech9} />
            <img className="icons" src={props.tech10} />
            <img className="icons" src={props.tech11} />
            <img className="icons" src={props.tech12} />
          </div>
          <br></br>
        </div>
        <div className="portfolioButtons">
          <a className="portfolioLinks" href={props.deployedLink} target="_blank">
            <button className="boton">Demo</button>
          </a>
          <a className="portfolioLinks" href={props.gitHubLink} target="_blank">
            <button className="boton">Git Hub Repo</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
