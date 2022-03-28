import "../../Styles/SideNav.scss";
import React from "react";
import logo from "../../Assets/logo/crimelogo.png";

function SideNav() {
  return (
    <div className="side-menu">
      SideNav
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="crimelogo" />
        </div>
        <div className="toggle-menu-btn">
          <i class="bi bi-arrow-left-square-fill"></i>
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default SideNav;
