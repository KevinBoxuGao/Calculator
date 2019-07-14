import React from "react";
import "../css/Display.css";

class Display extends React.Component {
  render() {
    return(
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Display