import React, { Component } from "react";
import Row from "./Row";
import SneakerForm from "./SneakerForm";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
    this.displayForm = this.displayForm.bind(this);
  }

  displayForm() {
    this.setState(state => ({
      showForm: !state.showForm
    }));
    // console.log(this.state.showForm);
  }

  render() {
    return (
      <div className="grid">
        <div>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
        {/* <SneakerForm /> */}
      </div>
    );
  }
}

export default Grid;
