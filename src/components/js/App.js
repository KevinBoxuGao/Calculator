import React from "react";
import Display from "./Display.js";
import ButtonPanel from "./ButtonPanel";
import calculate from "../../logic/calculate.js"
import "../css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: "",
      current: "0",
      operation: null,
    }
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return(
      <div className="component-app">
        <Display value={this.state.current} history={this.state.history}/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;