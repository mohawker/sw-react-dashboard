import React, { Component } from "react";
// styles
import "./settings.css";
// assets
import caret from "../../assets/Navbar/caret-down.svg";
import iconMail from "../../assets/Navbar/icon-mail.svg";

class Settings extends Component {
  render() {
    let userName = this.props.user.name;
    let avatarSrc = this.props.user.avatar;
    let notifCount = this.props.user.notifications_count;
    return (
      <div className="navbar-settings">
        <img src={caret} className="navbar-settings-caret" alt="caret-down" />
        <img src={avatarSrc} className="navbar-settings-dp" alt="navbar-dp" />
        <span className="navbar-settings-greetings"> Hello, {userName} </span>
        <span className="navbar-settings-mail">
          <img src={iconMail} className="navbar-settings-mail-logo" alt="icon-mail" />
          <span className="navbar-settings-mail-badge">
            <span className="navbar-settings-mail-badge-count">{notifCount}</span>
          </span>
        </span>
      </div>
    );
  }
}

export default Settings;
