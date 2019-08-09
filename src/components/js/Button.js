import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    yellow: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  }

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.yellow ? "yellow" : "",
      this.props.wide ? "wide" : "",
    ];

    return(
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;