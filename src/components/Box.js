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
      isFormShowing: false
    };

    this.displayForm = this.displayForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddSneaker = this.handleAddSneaker.bind(this);
    this.handleDeleteSneaker = this.handleDeleteSneaker.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const data = this.state.sneakerData;
    console.log(data);
    this.setState({ isFormShowing: false });
  }

  handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => ({
      sneakerData: {
        ...prevState.sneakerData,
        [name]: value
      }
    }));
  }

  handleAddSneaker(event) {
    event.preventDefault();
    const emptyData = checkEmptyData(this.state.sneakerData);
    console.log(emptyData);
    if (emptyData) {
      console.log("no data");
    }

    function checkEmptyData(sneakerData) {
      for (let key in sneakerData) {
        console.log(key);
        if (sneakerData[key] === "") {
          return true;
        }
        return false;
      }
    }
  }

  handleDeleteSneaker(event) {
    event.preventDefault();
    const deleteConfirm = window.confirm("Press OK to delete this item.");
    if (deleteConfirm) {
      this.setState({
        sneakerData: {
          brand: "",
          style: "",
          size: "",
          upcID: ""
        },
        isFormShowing: false
      });
    }
  }

  handleCloseForm() {
    this.setState({
      isFormShowing: false
    });
  }

  displayForm() {
    this.setState({
      isFormShowing: !this.state.isFormShowing
    });
  }

  render() {
    const { brand, style, size, upcID } = this.state.sneakerData;
    return (
      <div className="box">
        {
          <div onClick={this.displayForm}>
            <p>Brand: {brand}</p>
            <p>Style: {style}</p>
            <p>Size: {size}</p>
            <p>UPC ID: {upcID}</p>
          </div>
        }
        {this.state.isFormShowing && (
          <SneakerForm
            onChange={this.handleInputChange}
            onSubmit={this.handleFormSubmit}
            handleAddSneaker={this.handleAddSneaker}
            handleCloseForm={this.handleCloseForm}
            handleDeleteSneaker={this.handleDeleteSneaker}
            brand={brand}
            style={style}
            size={size}
            upcID={upcID}
          />
        )}
      </div>
    );
  }
}

export default Box;
