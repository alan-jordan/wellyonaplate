import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { data } from "./data/data";

class App extends Component {
  getData = () => {
    console.log(
      data.venues.map(venue => ({
        name: venue.Venue.title,
        address: venue.Venue.address1
      }))
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.getData()}
        {console.log(data)}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
