import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Display from "./Display.js";
import ButtonPanel from "./ButtonPanel";
import "../css/App.css";

class App extends React.Component {
  render() {
    return(
      <div className="component-app">
        <Display></Display>
        <ButtonPanel></ButtonPanel>
      </div>
    );
  }
}

export default App;