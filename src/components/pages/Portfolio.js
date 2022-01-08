import React from "react";
import CovidGiphy from "../../assets/Gifs/CovidTravelInformationCenter.gif";
import PurpleMinutesGiphy from "../../assets/Gifs/PurpleMinutesStyle.gif";
import HoriseonGiphy from "../../assets/Gifs/HoriseonSocialSolutionServices.gif";
import OpenSesameGiphy from "../../assets/Gifs/PasswordGenerator.gif";
import PlannerGiphy from "../../assets/Gifs/WorkDayScheduler.gif";
import NotesAppGiphy from "../../assets/Gifs/NoteTaker.gif";
const WebPortfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <br></br>

    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Covid Travel Information Center</h4>
      <img src={CovidGiphy}></img>
      <a href="https://github.com/nguyen-william93/Covid-Tourism-Information-Center">
        GitHub Link
      </a>
      <a href="https://nguyen-william93.github.io/Covid-Tourism-Information-Center/">
        Deployed Link
      </a>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Purple Minutes Styling</h4>
      <img src={PurpleMinutesGiphy}></img>
      <a href="https://github.com/izztnkr/Project2_Purple_Minutes_Style">
        GitHub Link
      </a>
      <a href="https://purpleminutesstyle.herokuapp.com//">Deployed Link</a>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Horiseon Social Solutions</h4>
      <img src={HoriseonGiphy}></img>
      <a href="https://github.com/izztnkr/Tnkr-ing-Refactor-Project">
        GitHub Link
      </a>
      <a href="https://izztnkr.github.io/Tnkr-ing-Refactor-Project/">
        Deployed Link
      </a>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Open Sesame Password Generator</h4>
      <img src={OpenSesameGiphy}></img>
      <a href="https://github.com/izztnkr/Open-Sesame-Generator">GitHub Link</a>
      <a href="https://izztnkr.github.io/Open-Sesame-Generator/">
        Deployed Link
      </a>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Daily Planner App</h4>
      <img src={PlannerGiphy}></img>
      <a href="https://github.com/izztnkr/Daily-Planner">
        GitHub Link
      </a>
      <a href="https://izztnkr.github.io/Daily-Planner/">
        Deployed Link
      </a>
    </div>
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h4>Note Taker App</h4>
      <img src={NotesAppGiphy}></img>
      <a href="https://github.com/izztnkr/MyNotes">
        GitHub Link
      </a>
      <a href="https://notesappvia.herokuapp.com/">
        Deployed Link
      </a>
    </div>
  </div>
);

export default WebPortfolio;
