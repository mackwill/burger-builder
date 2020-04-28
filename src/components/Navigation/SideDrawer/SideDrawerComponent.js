import React from "react";
import "./SideDrawerComponent.css";

const SideDrawerComponent = (props) => {
  return <i className="fas fa-bars" onClick={props.clicked}></i>;
};

export default SideDrawerComponent;
