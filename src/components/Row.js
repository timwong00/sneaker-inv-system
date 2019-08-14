import React, { Component } from "react";
import Box from "./Box";

class Row extends Component {
  render() {
    return (
      <div className="row">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  }
}

export default Row;
