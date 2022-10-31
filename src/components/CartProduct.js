import React, { Component } from "react";

export default class CartProduct extends Component {
  render() {
    const { name } = this.props;
    return <span className="cart-product">{name}</span>;
  }
}
