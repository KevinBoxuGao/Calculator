import React from "react";
import "../css/Display.css";
import PropTypes from "prop-types";

class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    history: PropTypes.string,
  };

  render() {
    return(
      <div className="component-display">
        <div className="display-history">
          <p>{this.props.history}</p>
        </div>
        <div className="display-value">{this.props.value}</div>
      </div>
    );
  }
}

export default Display