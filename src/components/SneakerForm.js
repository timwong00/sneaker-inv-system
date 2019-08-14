import React, { Component } from "react";
import SneakerInputBlock from "./SneakerInputBlock";

class SneakerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakerData: {
        brand: "",
        style: "",
        size: "",
        upcID: ""
      }
    };

    // // reference
    // this.inputBrandRef = React.createRef();
    // this.inputStyleRef = React.createRef();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const data = this.state.sneakerData;
    if (this.props.onSubmit) {
      this.props.onSubmit(data);
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: value
    }));
  }

  handleChange(event) {
    event.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  // clears form data
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      sneakerData: {
        brand: "",
        style: "",
        size: "",
        upcID: ""
      }
    });
  }

  componentDidMount() {
    this.setState({
      sneakerData: {
        brand: "Adidas",
        style: "Yeezy",
        size: "10",
        upcID: "ABC123"
      }
    });
  }

  render() {
    return (
      <form className="sneakerForm" onSubmit={this.handleFormSubmit}>
        {/* <p>Brand: {this.state.brand}</p>
        <p>Style: {this.state.style}</p>
        <p>Size: {this.state.size}</p>
        <p>UPC ID: {this.state.upcID}</p> */}
        <SneakerInputBlock
          onChange={this.handleInputChange}
          inputBrand="brand"
          inputStyle="style"
          inputSize="size"
          inputUpcID="upcID"
          brandValue={this.state.sneakerData.brand}
          styleValue={this.state.sneakerData.style}
          sizeValue={this.state.sneakerData.size}
          upcIDValue={this.state.sneakerData.upcID}
        />
        <button>Submit</button>
        <button onClick={this.handleClearForm}>Clear</button>
      </form>
    );
  }
}

export default SneakerForm;
