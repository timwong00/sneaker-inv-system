import React, { Component } from "react";
import SneakerInputBlock from "./SneakerInputBlock";

class AddSneakerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      addingSneaker: false,
      editingSneaker: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAddSneaker = this.handleAddSneaker.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
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

  handleAddSneaker(e) {
    e.preventDefault();
    if (this.props.handleAddSneaker) {
      this.props.handleAddSneaker(e);
    }
  }

  handleCloseForm(e) {
    e.preventDefault();
    if (this.props.handleCloseForm) {
      this.props.handleCloseForm(e);
    }
  }

  render() {
    return (
      <div className="sneakerFormContainer">
        <form className="sneakerForm" onSubmit={this.handleFormSubmit}>
          <h3 className="sneakerFormTitle">Add Sneaker</h3>
          <div className="formInputContainer">
            <SneakerInputBlock
              onChange={this.handleChange}
              inputBrand="brand"
              inputStyle="style"
              inputSize="size"
              inputUpcID="upcID"
            />
            <button className="submitButton">Submit</button>
            <span onClick={this.handleCloseForm} className="closeButton">
              X
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSneakerForm;
