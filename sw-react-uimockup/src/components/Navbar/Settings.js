import React, { Component } from "react";
import "./navbar.css";
import caret from "../../assets/Navbar/caret-down.svg";
import iconMail from "../../assets/Navbar/icon-mail.svg";
import profilePicture from "../../assets/Navbar/john.svg";

class Settings extends Component {
  render() {
    return (
      <div className="navbar-settings">
        <span>
          <img src={caret} className="navbar-caret" alt="caret-down" />
        </span>
        <span>
          <img src={profilePicture} className="navbar-dp" alt="navbar-dp" />
        </span>
        <span className="navbar-greetings"> Hello, John </span>
        <span>
          <img src={iconMail} className="navbar-mail" alt="icon-mail" />
        </span>
      </div>
    );
  }
}

export default Settings;
