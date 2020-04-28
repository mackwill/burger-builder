import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <SideDrawerToggle sideMenuClicked={props.sideMenuClicked} />
      {/* <div className="SideMenu">
        <i class="fas fa-bars" onClick={props.sideMenuClicked}></i>
      </div> */}
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
