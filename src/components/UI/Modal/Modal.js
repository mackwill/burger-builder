import React, { Component, Fragment } from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentWillUpdate() {
    console.log("[Modal] WillUpdate");
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={"Modal " + (this.props.show ? "showTrue" : "showFalse")}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
