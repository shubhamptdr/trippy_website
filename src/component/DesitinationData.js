import React, { Component } from "react";
import "./Destination.css";

export class DesitinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="dest-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt={this.props.img1} />
          <img src={this.props.img2} alt={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DesitinationData;
