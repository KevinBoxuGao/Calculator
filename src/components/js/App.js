import React from "react";
import {hot} from "react-hot-loader";
import Display from "./Display.js";
import ButtonPanel from "./ButtonPanel";
//import calculate from "../../logic/calculate.js"
import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
      total: null,
      operation: null,
      next: null,
    }
  }

  handleClick = buttonName => {
    console.log(buttonName);
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return(
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} history={this.state.history}/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;