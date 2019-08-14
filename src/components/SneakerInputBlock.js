import React, { Component } from "react";
import TextInput from "./TextInput";

class SneakerInputBlock extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;

    // set text input reference to input element
    this.setTextInputRef = el => {
      this.textInput = el;
    };

    // focus on text input
    this.focusTextInput = () => {
      if (this.textInput) {
        this.textInput.focus();
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  componentDidMount() {
    this.focusTextInput();
  }

  render() {
    return (
      <div>
        <label>Brand</label>
        <TextInput
          inputRef={this.setTextInputRef}
          type="text"
          name={this.props.inputBrand}
          onChange={this.handleChange}
          value={this.props.brandValue}
        />
        <label>Style</label>
        <TextInput
          type="text"
          name={this.props.inputStyle}
          onChange={this.handleChange}
          value={this.props.styleValue}
        />
        <label>Size</label>
        <TextInput
          type="text"
          name={this.props.inputSize}
          onChange={this.handleChange}
          value={this.props.sizeValue}
        />
        <label>UPC ID</label>
        <TextInput
          type="text"
          name={this.props.inputUpcID}
          onChange={this.handleChange}
          value={this.props.upcIDValue}
        />
      </div>
    );
  }
}

export default SneakerInputBlock;
