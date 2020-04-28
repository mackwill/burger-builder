import React, { Component, Fragment } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
      // sideMenuClicked: false,
    };
    // this.sideMenuHandler = this.sideMenuHandler.bind(this);
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideMenuHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };

      // showSideDrawer: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar sideMenuClicked={this.sideMenuHandler} />
        {/* {this.state.sideMenuClicked && (
          <SideDrawer
            closed={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer}
          />
        )} */}
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
