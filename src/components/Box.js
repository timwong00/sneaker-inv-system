import React, { Component } from "react";
import SneakerForm from "./SneakerForm";

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sneakerData: {
        brand: "",
        style: "",
        size: "",
        upcID: ""
      },
      showForm: false
    };

    // this.displayForm = this.displayForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(data) {
    this.setState({
      sneakerData: {
        brand: data.brand,
        style: data.style,
        size: data.size,
        upcID: data.upcID
      }
    });
    console.log(data);
  }

  // displayForm() {
  //   this.setState({
  //     showForm: !this.state.showForm
  //   });
  // }

  render() {
    return (
      <div className="box">
        <div>
          <p>Brand: {this.state.sneakerData.brand}</p>
          <p>Style: {this.state.sneakerData.style}</p>
          <p>Size: {this.state.sneakerData.size}</p>
          <p>UPC ID: {this.state.sneakerData.upcID}</p>
        </div>
        <SneakerForm
          style={
            this.state.showForm ? { display: "block" } : { display: "none" }
          }
          onSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Box;
