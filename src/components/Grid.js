import React, { Component } from "react";
import Row from "./Row";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }

  render() {
    return (
      <div className="grid">
        <Row />
        <Row />
        {/* <Row />
        <Row />
        <Row /> */}
      </div>
    );
  }
}

export default Grid;
