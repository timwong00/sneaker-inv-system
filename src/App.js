import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sneaker Inventory Shelf</h1>
        <Grid />
      </div>
    );
  }
}

export default App;
