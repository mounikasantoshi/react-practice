import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
    max: 10,
    min: 0,
  };

  incNum = () => {
    if (this.state.count < this.state.max) {
      this.setState({ count: this.state.count + 1 });
    }
  };
  decNum = () => {
    if (this.state.count > this.state.min) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.decNum}>decrement</button>
        <span>{this.state.count}</span>
        <button onClick={this.incNum}>increment</button>
        <div>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Counter;
