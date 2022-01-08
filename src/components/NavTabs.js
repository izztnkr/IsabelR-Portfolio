import React from "react";

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <div style={{ display: "flex" }}>
      <h1>Isabel Ramirez</h1>,
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavTabs;
