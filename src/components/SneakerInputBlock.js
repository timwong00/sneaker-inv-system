import React, { Component } from "react";
import TextInput from "./TextInput";

class SneakerInputBlock extends Component {
  constructor(props) {
    super(props);

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
      <div className="inputBlock">
        <label className="sneakerFormLabel">Brand</label>
        <TextInput
          type="text"
          name={this.props.inputBrand}
          onChange={this.handleChange}
          value={this.props.brandValue}
        />
        <label className="sneakerFormLabel">Style</label>
        <TextInput
          type="text"
          name={this.props.inputStyle}
          onChange={this.handleChange}
          value={this.props.styleValue}
        />
        <label className="sneakerFormLabel">Size</label>
        <TextInput
          type="text"
          name={this.props.inputSize}
          onChange={this.handleChange}
          value={this.props.sizeValue}
        />
        <label className="sneakerFormLabel">UPC ID</label>
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
