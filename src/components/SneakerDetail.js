import React, { Component } from "react";

class SneakerDetail extends Component {
  constructor(props) {
    super(props);
    this.isClicked = this.isClicked.bind(this);
  }

  isClicked(event) {
    event.preventDefault();
    const { displayOptions } = this.props;
    if (displayOptions !== undefined) {
      displayOptions("elo");
    }
  }

  render() {
    return (
      <div onClick={this.isClicked}>
        <h1>{this.props.sneaker.brand}</h1>
        <p>{this.props.sneaker.style}</p>
      </div>
    );
  }
}

export default SneakerDetail;
