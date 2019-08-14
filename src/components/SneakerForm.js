import React, { Component } from "react";
import SneakerInputBlock from "./SneakerInputBlock";

class SneakerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAddSneaker = this.handleAddSneaker.bind(this);
    this.handleEditSneaker = this.handleEditSneaker.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleDeleteSneaker = this.handleDeleteSneaker.bind(this);
  }

  // handleInputChange(event) {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   this.setState(prevState => ({
  //     sneakerData: {
  //       ...prevState.sneakerData,
  //       [name]: value
  //     }
  //   }));
  // }

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

  // handleClearForm(event) {
  //   event.preventDefault();
  //   this.setState({
  //     sneakerData: {
  //       brand: "",
  //       style: "",
  //       size: "",
  //       upcID: ""
  //     }
  //   });
  // }

  handleAddSneaker(event) {
    event.preventDefault();
    this.toggleHidden();
    if (this.props.handleAddSneaker) {
      this.props.handleAddSneaker(event);
    }
  }

  handleEditSneaker(event) {
    event.preventDefault();
    this.toggleHidden();
    // this.checkForData(this.state.sneakerData);
    // console.log(this.checkForData(this.state.sneakerData));
  }

  handleDeleteSneaker(event) {
    event.preventDefault();
    if (this.props.handleDeleteSneaker) {
      this.props.handleDeleteSneaker(event);
    }
  }

  handleCloseForm(event) {
    event.preventDefault();
    if (this.props.handleCloseForm) {
      this.props.handleCloseForm(event);
    }
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  componentDidMount() {
    this.setState({
      sneakerData: {
        brand: this.props.brand,
        style: this.props.style,
        size: this.props.size,
        upcID: this.props.upcID
      }
    });
  }

  render() {
    const { brand, style, size, upcID } = this.props;
    return (
      <form className="sneakerForm" onSubmit={this.handleFormSubmit}>
        <button onClick={this.handleCloseForm}>X</button>
        <button onClick={this.handleAddSneaker}>Add</button>
        <button onClick={this.handleEditSneaker}>Edit</button>
        <button onClick={this.handleDeleteSneaker}>Delete</button>

        {!this.state.isHidden && (
          <div>
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
            <button>Submit</button>
            {/* <button onClick={this.handleClearForm}>Clear</button> */}
          </div>
        )}
      </form>
    );
  }
}

export default SneakerForm;
