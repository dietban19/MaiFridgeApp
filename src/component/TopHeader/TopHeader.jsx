// TopHeader.js

import React from "react";
import "./top.scss"; // Assuming you have a separate CSS file for TopHeader
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import LogoImage from "../../assets/cookit.png";
const TopHeader = ({ toggleSidebar, isSidebarOpen }) => {
  const hamburgerOpen = isSidebarOpen ? "open" : "";
  return (
    <div className="top-header flex">
      <div className="left-header flex">
        {" "}
        <button className="hamburger-button" onClick={toggleSidebar}>
          <div id="nav-icon3" className={hamburgerOpen}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="logo">
        <img src={LogoImage} />
      </div>
      {/* <div className="header-search-container">
        <input type="text" />
      </div> */}

      <button className="signup-btn btn">Sign Up</button>
    </div>
  );
};

export default TopHeader;
