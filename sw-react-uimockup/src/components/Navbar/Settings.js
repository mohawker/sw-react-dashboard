import React, { Component } from "react";
import "./navbar.css";
import caret from "../../assets/Navbar/caret-down.svg";
import iconMail from "../../assets/Navbar/icon-mail.svg";

class Settings extends Component {
  render() {
    let userName = this.props.user.name;
    let avatarSrc = this.props.user.avatar;
    let notifCount = this.props.user.notifications_count;
    return (
      <div className="navbar-settings">
        <img src={caret} className="navbar-caret" alt="caret-down" />
        <img src={avatarSrc} className="navbar-dp" alt="navbar-dp" />
        <span className="navbar-greetings"> Hello, {userName} </span>
          <img src={iconMail} className="navbar-mail" alt="icon-mail" />
          <span className="navbar-badge">
            <span className="navbar-badge-count">{notifCount}</span>
          </span>
      </div>
    );
  }
}

export default Settings;
