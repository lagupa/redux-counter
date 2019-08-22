import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0
  };

  handleClick = e => {
    switch (e.target.value) {
      case "increment":
        return this.setState({
          count: this.state.count + 1
        });
      case "decrement":
        return this.setState({
          count: this.state.count - 1
        });
      case "Add5":
        return this.setState({
          count: this.state.count + 5
        });
      case "subtract5":
        return this.setState({
          count: this.state.count - 5
        });
      case "Reset":
        return this.setState({
          count: 0
        });
      default:
        return this.state.count;
    }
  };
  render() {
    return (
      <div>
        <div className="bg-primary">
          <h3 className="container text-white pt-4 pb-4">
            Current Counter: {this.state.count}
          </h3>
        </div>

        <div className="container">
          <button
            className="increment btn btn-warning text-white btn-lg mr-4 mt-4"
            onClick={this.handleClick}
            value="increment"
          >
            Increment
          </button>
          <button
            className="decrement btn btn-warning text-white btn-lg mr-4 mt-4"
            onClick={this.handleClick}
            value="decrement"
          >
            Decrement
          </button>
          <button
            className="add btn btn-warning text-white btn-lg mr-4 mt-4"
            onClick={this.handleClick}
            value="Add5"
          >
            Add 5
          </button>
          <button
            className="subtract btn btn-warning text-white btn-lg mr-4 mt-4"
            onClick={this.handleClick}
            value="subtract5"
          >
            Subtract 5
          </button>
          <button
            className="subtract btn btn-warning text-white btn-lg mr-4 mt-4"
            onClick={this.handleClick}
            value="Reset"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
