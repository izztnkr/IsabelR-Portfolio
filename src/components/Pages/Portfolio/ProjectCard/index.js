import React from "react";
import "./style.css";

// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <section class="dodo">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong> {props.name}</strong>
            </li>
            <li className="link">
              <a href={props.gitHubLink} target="_blank">
                Git Hub Link
              </a>
            </li>
            <li>
              <a href={props.deployedLink} target="_blank">
                Deployed Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
