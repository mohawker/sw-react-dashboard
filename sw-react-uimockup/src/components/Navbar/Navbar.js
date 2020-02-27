import React, { Component } from "react";
import "./navbar.css";
import Settings from "./Settings";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span className="navbar-app-name">NARWHAL</span>
        <span className="navbar-breadcrumbs">Teams</span>
        <Settings user={this.props.user} />
      </div>
    );
  }
}

export default Navbar;
