import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let attatchedClasses = ["SideDrawer", "Close"];

  if (props.open) {
    attatchedClasses = ["SideDrawer", "Open"];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attatchedClasses.join(" ")}>
        <Logo height="11%" style={{ marginBottom: "32px" }} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
