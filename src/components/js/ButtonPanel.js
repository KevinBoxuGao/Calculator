import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "../css/ButtonPanel.css";

class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button_panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} wide></Button>
          <Button name="Del" clickHandler={this.handleClick}></Button>
          <Button name="%" clickHandler={this.handleClick} wide yellow></Button>
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick}></Button>
          <Button name="8" clickHandler={this.handleClick}></Button>
          <Button name="9" clickHandler={this.handleClick}></Button>
          <Button name="(" clickHandler={this.handleClick} yellow ></Button>
          <Button name=")" clickHandler={this.handleClick} yellow ></Button>
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick}></Button>
          <Button name="5" clickHandler={this.handleClick}></Button>
          <Button name="6" clickHandler={this.handleClick}></Button>
          <Button name="x" clickHandler={this.handleClick} yellow ></Button>
          <Button name="/" clickHandler={this.handleClick} yellow ></Button>
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick}></Button>
          <Button name="2" clickHandler={this.handleClick}></Button>
          <Button name="3" clickHandler={this.handleClick}></Button>
          <Button name="+" clickHandler={this.handleClick} yellow></Button>
          <Button name="-" clickHandler={this.handleClick} yellow></Button>
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} ></Button>
          <Button name="." clickHandler={this.handleClick}></Button>
          <Button name="+/-" clickHandler={this.handleClick}></Button>
          <Button name="=" clickHandler={this.handleClick} yellow wide></Button>
        </div>
      </div>
    );
  }
}

export default ButtonPanel
