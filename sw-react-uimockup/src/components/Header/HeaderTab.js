import React, { Component } from "react";
// styles
import "./headertab.css";

class HeaderTab extends Component {
  render() {
    let style = this.props.style;
    let method = this.props.method;
    let name = this.props.name;
    return (
      <div className={style} onClick={method}>
        {" "}
        <span className={style + "-text"}>{name}</span>
      </div>
    );
  }
}

export default HeaderTab;
