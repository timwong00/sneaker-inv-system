import React, { Component } from "react";
import SneakerForm from "./SneakerForm";

class Box extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  // toggleShowForm = index => {

  // }
  // };

  render() {
    return (
      <div className="box" onClick={this.toggleShowForm}>
        {this.state.showForm ? <SneakerForm /> : console.log("false")}
      </div>
    );
  }
}

export default Box;
