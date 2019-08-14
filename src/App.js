import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import SneakerForm from "./components/SneakerForm";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     showForm: false
  //   };
  // }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Shoe Inventory</h1>
          <Grid />
        </div>
        {/* <SneakerForm /> */}
      </div>
    );
  }
}

export default App;
