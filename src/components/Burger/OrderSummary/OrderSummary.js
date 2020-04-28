import React, { Component, Fragment } from "react";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // This could be a functional component, was changed to state based for debugging purposes
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Fragment>
        <h3>Your Order:</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
