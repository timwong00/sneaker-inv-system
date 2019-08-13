import React, { Component } from "react";

class SneakerForm extends Component {
  constructor() {
    super();
    this.state = {
      brand: "",
      style: "",
      size: 0,
      upcID: ""
    };
  }

  render() {
    return (
      <form className="sneakerForm">
        <label>Brand</label>
        <input type="text" />
        <label>Style</label>
        <input type="text" />
        <label>Size</label>
        <input type="text" />
        <label>UPC ID</label>
        <input type="text" />
      </form>
    );
  }
}

export default SneakerForm;
