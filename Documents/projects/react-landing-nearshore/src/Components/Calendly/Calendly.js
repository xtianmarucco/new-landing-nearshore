import React, { Component } from "react";
import "./Calendly.css";

class Calendly extends Component {
  render() {
    return (
      <div>
        <div id="schedule_form">
          <div className="calendly-inline-widget text-center">
            <a href="https://calendly.com/devlights/30min ">
              {this.props.children}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendly;

// const calendly = props =>(

//     <div>hola</div>

// );
// export default calendly;
