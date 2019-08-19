import React, { Component } from "react";

class TextInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    return (
      <p>
        <input
          type="text"
          value={this.props.value}
          name={this.props.name}
          onChange={this.handleChange}
        />
      </p>
    );
  }
}

export default TextInput;
