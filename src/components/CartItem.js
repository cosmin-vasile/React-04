import React, { Component } from "react";

export default class CartItem extends Component {
  getCounterClasses = () => {
    let classes = "badge m-2 bg-";
    const { count } = this.props;
    classes += count === 0 ? "warning" : "info";
    return classes;
  };

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { children, handleDecrement, handleIncrement, count } = this.props;
    return (
      <div>
        {children}
        <button onClick={handleDecrement} className="btn btn-dark btn-sm">
          -
        </button>
        <span className={this.getCounterClasses()}>{count}</span>
        <button onClick={handleIncrement} className="btn btn-dark btn-sm">
          +
        </button>
      </div>
    );
  }
}
