import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerComponent from "../SideDrawer/SideDrawerComponent";

const toolbar = (props) => {
  // state = {
  //   sideMenuClicked: false,
  // };

  // sideMenuHandler = () => {
  //   this.setState = {
  //     sideMenuClicked: true,
  //   };
  //   console.log("Side Menu Clicked!");
  // };
  return (
    <header className="Toolbar">
      {/* <SideDrawerComponent clicked={props.sideMenuClicked} /> */}
      <div className="SideMenu">
        <i class="fas fa-bars" onClick={props.sideMenuClicked}></i>
      </div>
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
