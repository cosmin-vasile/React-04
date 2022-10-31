import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    const { defaultValue } = props;

    this.state = {
      count: defaultValue,
      imgUrl: "img-url",
    };

    this.onIncrementClick = this.onIncrementClick.bind(this);
  }

  onIncrementClick() {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
    this.props.onValueChange(newCount);
  }
  onDecrementClick = () => {
    const newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    });
    this.props.onValueChange(newCount);
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <button onClick={this.onDecrementClick}>Decrement</button>
        <span>{this.state.count}</span>
        <button onClick={this.onIncrementClick}>Increment</button>
      </>
    );
  }
}

export default Counter;
