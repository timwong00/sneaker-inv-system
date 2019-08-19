import React, { Component } from "react";
import EditSneakerForm from "./EditSneakerForm";
import AddSneakerForm from "./AddSneakerForm";

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
      showAddForm: false,
      showEditForm: false,
      hasSneakerData: false
    };

    this.baseState = this.state;

    this.displayAddForm = this.displayAddForm.bind(this);
    this.displayEditForm = this.displayEditForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteSneaker = this.handleDeleteSneaker.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      showAddForm: false,
      showEditForm: false,
      hasSneakerData: true
    });
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState(prevState => ({
      sneakerData: {
        ...prevState.sneakerData,
        [name]: value
      }
    }));
  }

  handleDeleteSneaker(e) {
    e.preventDefault();
    const deleteConfirm = window.confirm("Press OK to delete this sneaker.");
    if (deleteConfirm) {
      this.setState(this.baseState);
    }
  }

  handleCloseForm() {
    this.setState({
      showAddForm: false,
      showEditForm: false
    });
  }

  displayAddForm() {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  }

  displayEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  render() {
    const { brand, style, size, upcID } = this.state.sneakerData;
    return (
      <div className="boxContainer">
        <div className="contentContainer">
          {this.state.hasSneakerData ? (
            <div className="content" onClick={this.displayEditForm}>
              <p className="sneakerInfo">Brand: {brand}</p>
              <p className="sneakerInfo">Style: {style}</p>
              <p className="sneakerInfo">Size: {size}</p>
              <p className="sneakerInfo">UPC ID: {upcID}</p>
            </div>
          ) : (
            <div className="content" onClick={this.displayAddForm}>
              <p className="addSneakerButton">Add a sneaker</p>
            </div>
          )}
        </div>

        {this.state.showAddForm && (
          <AddSneakerForm
            onChange={this.handleInputChange}
            onSubmit={this.handleFormSubmit}
            handleAddSneaker={this.handleAddSneaker}
            handleCloseForm={this.handleCloseForm}
            handleDeleteSneaker={this.handleDeleteSneaker}
          />
        )}

        {this.state.showEditForm && (
          <EditSneakerForm
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
