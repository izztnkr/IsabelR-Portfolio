import React from "react";
import CovidGiphy from "../../assets/Gifs/CovidTravelInformationCenter.gif";

const WebPortfolio = () => (
  <div >
    <h1>Portfolio</h1>
    <br></br>

    <div style={{ display: "flex", alignItems:"center",flexDirection:"column" }}>
      <h4>Covid Travel Information Center</h4>
      <img src={CovidGiphy}></img>
      <a href="https://github.com/izztnkr/Tnkr-ing-Refactor-Project">
        GitHub Link
      </a>
      <a href="https://izztnkr.github.io/Tnkr-ing-Refactor-Project/">
        Deployed Link
      </a>
    </div>
    <div style={{ display: "flex", alignItems:"center",flexDirection:"column" }}>
      <h4>Covid Travel Information Center</h4>
      <img src={CovidGiphy}></img>
      <a href="https://github.com/izztnkr/Tnkr-ing-Refactor-Project">
        GitHub Link
      </a>
      <a href="https://izztnkr.github.io/Tnkr-ing-Refactor-Project/">
        Deployed Link
      </a>
    </div>
    <div style={{ display: "flex", alignItems:"center",flexDirection:"column" }}>
      <h4>Covid Travel Information Center</h4>
      <img src={CovidGiphy}></img>
      <a href="https://github.com/izztnkr/Tnkr-ing-Refactor-Project">
        GitHub Link
      </a>
      <a href="https://izztnkr.github.io/Tnkr-ing-Refactor-Project/">
        Deployed Link
      </a>
    </div>
  </div>
);

export default WebPortfolio;
