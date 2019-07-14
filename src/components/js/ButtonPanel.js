import React from "react";
import Button from "./Button";
import "../css/ButtonPanel.css";

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className="component-button_panel">
        <div>
          <Button name="C" wide></Button>
          <Button name="%"></Button>
          <Button name="/" yellow></Button>
        </div>
        <div>
          <Button name="7"></Button>
          <Button name="8"></Button>
          <Button name="9"></Button>
          <Button name="x" yellow></Button>
        </div>
        <div>
          <Button name="4"></Button>
          <Button name="5"></Button>
          <Button name="6"></Button>
          <Button name="-" yellow></Button>
        </div>
        <div>
          <Button name="1"></Button>
          <Button name="2"></Button>
          <Button name="3"></Button>
          <Button name="+" yellow></Button>
        </div>
        <div>
          <Button name="0" wide></Button>
          <Button name="."></Button>
          <Button name="=" yellow></Button>
        </div>
      </div>
    );
  }
}

export default ButtonPanel
