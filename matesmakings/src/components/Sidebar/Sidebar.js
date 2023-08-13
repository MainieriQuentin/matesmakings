import React from "react";
import "../Sidebar/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <nav>
      <div className="sidebarContainer">
        <FontAwesomeIcon icon={faBars} className="iconFaBars" />
        <FontAwesomeIcon icon={faXmark} className="iconFaXmark" />
        <div className="sidebarLogoElement">
          <img src={`../../Blanc.png`}></img>
        </div>
        <div className="sidebarTabs">
          <h2>Hey</h2>
          <div className="sidebarSearchBar">
            <h3>Yea</h3>
          </div>
          <div className="sidebarOtherTabs">
            <h3> Yeah</h3>
            <h3> Yeah</h3>
            <h3> Yeah</h3>
            <h3> Yeah</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
