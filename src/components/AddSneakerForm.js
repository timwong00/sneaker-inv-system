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

  handleChange(event) {
    event.preventDefault();
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(event);
    }
  }

  handleAddSneaker(event) {
    event.preventDefault();
    if (this.props.handleAddSneaker) {
      this.props.handleAddSneaker(event);
    }
  }

  handleCloseForm(event) {
    event.preventDefault();
    if (this.props.handleCloseForm) {
      this.props.handleCloseForm(event);
    }
  }

  render() {
    return (
      <div className="sneakerForm-background">
        <form className="sneakerForm" onSubmit={this.handleFormSubmit}>
          <h3>Add a sneaker</h3>
          <div>
            <SneakerInputBlock
              onChange={this.handleChange}
              inputBrand="brand"
              inputStyle="style"
              inputSize="size"
              inputUpcID="upcID"
            />
            <button>Submit</button>
          </div>
          <button onClick={this.handleCloseForm}>Close</button>
        </form>
      </div>
    );
  }
}

export default AddSneakerForm;
