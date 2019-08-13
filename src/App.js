import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Shoe Inventory</h1>
        <Grid />
      </div>
    );
  }
}

export default App;
