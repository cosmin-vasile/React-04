import React, { Component } from "react";
import CartItem from "./CartItem";
import CartProduct from "./CartProduct";

export default class Cart extends Component {
  state = {
    total: 0,
    counts: {},
    products: [
      {
        id: 1,
        name: "Iphone",
      },
      {
        id: 2,
        name: "Samsung",
      },
      {
        id: 3,
        name: "Motorola",
      },
      {
        id: 4,
        name: "Nokia",
      },
    ],
  };

  handleIncrement = (id) => {
    const { counts, total } = this.state;
    const newCount = counts[id] ? ++counts[id] : 1;
    this.setState({
      counts: {
        ...counts,
        [id]: newCount,
      },
      total: total + 1,
    });
  };

  handleDecrement = (id) => {
    const { counts, total } = this.state;
    const newCount = counts[id] ? --counts[id] : 1;
    if (newCount > 0) {
      this.setState({
        counts: {
          ...counts,
          [id]: newCount,
        },
        total: total - 1,
      });
    } else if (newCount === 0) {
      //remore item from cart
    }
  };

  render() {
    const { products, counts } = this.state;
    return (
      <div className="cart-list">
        {products.map(({ id, name }) => (
          <CartItem
            key={id}
            count={counts[id]}
            handleIncrement={() => this.handleIncrement(id)}
            handleDecrement={() => this.handleDecrement(id)}
          >
            <CartProduct id={id} name={name} />
          </CartItem>
        ))}
        Total: {this.state.total}
      </div>
    );
  }
}
