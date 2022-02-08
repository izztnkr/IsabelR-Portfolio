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
          description={projects.description}
          image={projects.image}
          gitHubLink={projects.gitHubLink}
          deployedLink={projects.deployedLink}
          techType={projects.techType}
          tech1={projects.tech1}
          tech2={projects.tech2}
          tech3={projects.tech3}
          tech4={projects.tech4}
          tech5={projects.tech5}
          tech6={projects.tech6}
          tech7={projects.tech7}
          tech8={projects.tech8}
          tech9={projects.tech9}
          tech10={projects.tech10}
          tech11={projects.tech11}
          tech12={projects.tech12}
        />
      ))}
    </Wrapper>
  );
}

export default WebPortfolio;
