import React, { Component } from "react";
import Cart from "../Cart";
import "./styles.css";

class CartApp extends Component {
  render() {
    return (
      <div className="cart-app">
        <Cart />
      </div>
    );
  }
}

export default CartApp;
