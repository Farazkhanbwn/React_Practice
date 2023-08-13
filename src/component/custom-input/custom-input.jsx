import React, { Component } from "react";
import "./custom-input.css";

export default class CustomInput extends Component {
  handleKey = (e) => {
    this.props?.onChange?.(e.target.innerText);
  };

  render() {
    return (
      <div className="input" onKeyUp={this.handleKey} contentEditable></div>
    );
  }
}
