import React, { Component } from "react";
import "./Calendly.scss";

class Calendly extends Component {
  render() {
    return (
      <div className="calendly-inline-widget text-center">
        <a href="https://calendly.com/devlights/30min ">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default Calendly;
