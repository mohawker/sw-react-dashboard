import React, { Component } from "react";
import "./sidetile.css";

class Sidetile extends Component {
  render() {
    let logoSrc = this.props.logoSrc;
    let name = this.props.name;
    let style = this.props.style;

    return (
      <div className={style}>
        <img src={logoSrc} alt={name} className="sidetile-logo" />
      </div>
    );
  }
}

export default Sidetile;
