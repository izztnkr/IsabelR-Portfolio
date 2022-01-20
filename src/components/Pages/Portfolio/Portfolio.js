import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";
import projects from "./projects.json";
import "./Portfolio.css";

function WebPortfolio() {
  const [projectsList, setProjectsList] = useState(projects);

  return (
    <Wrapper>
      <h1 className="title">Portfolio</h1>
      {projectsList.map((projects) => (
        <ProjectCard
          id={projects.id}
          key={projects.id}
          name={projects.name}
          name={projects.name}
          image={projects.image}
          gitHubLink={projects.gitHubLink}
          deployedLink={projects.deployedLink}
        />
      ))}
    </Wrapper>
  );
}

export default WebPortfolio;
