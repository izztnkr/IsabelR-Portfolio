import React, { useState } from "react";
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import projects from './projects.json';
import './Portfolio.css';

function WebPortfolio() {
  // Using useState, declare a new state variable 'friendsList' and set it to the 'friends' array from 'friends.json'
  const [projectsList, setProjectsList] = useState(projects);

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'friendsList'
  // Update the state with the new friends list.
  // const removeFriend = id => {
  //   const newList = friendsList.filter(friend => friend.id !== id);
  //   setFriendsList(newList);
  // };

  return (
    <Wrapper>
      <h1 className="title">Portfolio</h1>
      {/* Map through 'friendsList' and render a 'FriendCard' for each friend */}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
      {projectsList.map(projects => (
        <ProjectCard
          // removeFriend={removeFriend}
          id={projects.id}
          key={projects.id}
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
