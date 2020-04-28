import React from "react";
import "./SideDrawerToggle.css";

const SideDrawerToggle = (props) => {
  return (
    <i className="fas fa-bars SideMenu" onClick={props.sideMenuClicked}></i>
  );
};

export default SideDrawerToggle;
