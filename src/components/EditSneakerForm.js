import React, { Component } from "react";
import SneakerInputBlock from "./SneakerInputBlock";

class EditSneakerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingSneaker: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleEditSneaker = this.handleEditSneaker.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleDeleteSneaker = this.handleDeleteSneaker.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
  }

  handleEditSneaker(e) {
    e.preventDefault();
    this.setState({
      editingSneaker: !this.state.editingSneaker
    });
  }

  handleDeleteSneaker(e) {
    e.preventDefault();
    if (this.props.handleDeleteSneaker) {
      this.props.handleDeleteSneaker(e);
    }
  }

  handleCloseForm(e) {
    e.preventDefault();
    if (this.props.handleCloseForm) {
      this.props.handleCloseForm(e);
    }
  }

  render() {
    const { brand, style, size, upcID } = this.props;
    return (
      <div className="sneakerFormContainer">
        <form className="sneakerForm" onSubmit={this.handleFormSubmit}>
          {this.state.editingSneaker && (
            <div className="formInputContainer">
              <span onClick={this.handleEditSneaker} className="backButton">
                &#8592;
              </span>
              <h3 className="sneakerFormTitle">Edit Sneaker</h3>
              <SneakerInputBlock
                onChange={this.handleChange}
                inputBrand="brand"
                inputStyle="style"
                inputSize="size"
                inputUpcID="upcID"
                brandValue={brand}
                styleValue={style}
                sizeValue={size}
                upcIDValue={upcID}
              />
              <button className="submitButton">Submit</button>
            </div>
          )}

          <span onClick={this.handleCloseForm} className="closeButton">
            X
          </span>

          {!this.state.editingSneaker ? (
            <div className="buttonContainer">
              <button onClick={this.handleEditSneaker}>Edit Sneaker</button>
              <button
                onClick={this.handleDeleteSneaker}
                className="deleteButton"
              >
                Delete Sneaker
              </button>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default EditSneakerForm;
