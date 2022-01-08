import React, { useState } from "react";
import Header from "./Header/Header";
import About from "../components/Pages/About/About";
import Portfolio from "../components/Pages/Portfolio/Portfolio";
import Contact from "../components/Pages/Contact/Contact";
import Resume from "../components/Pages/Resume/Resume";
import Footer from "../components/Footer/Footer";

function WebPortfolio() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
      <Footer />
    </div>
  );
}

export default WebPortfolio;
