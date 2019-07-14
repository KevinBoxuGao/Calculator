import React from "react";
import "../css/Button.css";

class Button extends React.Component {
  render() {
    const className = [
      "component-button",
      this.props.yellow ? "yellow" : "",
      this.props.wide ? "wide" : "",
    ];

    return(
      <div className={className.join(" ").trim()}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;