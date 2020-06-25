import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here
import './ScrollButton.css'
export default class Index extends React.Component {


  render() {
    return (
      <div>
        <ScrollUpButton style={{ height: 65, width: 60, background: '#5c93ce', fill: '#fff', padding: 15, border: 'unset', outline:'none' }} />
      </div>
    );
  }
}