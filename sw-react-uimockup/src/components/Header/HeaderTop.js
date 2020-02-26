import React, { Component } from "react";
//styles
import "./headertop.css"
//logos
import logoTeamsGrey from "../../assets/Header/logoTeamsGrey.svg";
import logoAdd from "../../assets/Header/logoAdd.svg";

class HeaderTop extends Component {
  render() {
    return (
      <div className="header-top">
        <img
          src={logoTeamsGrey}
          className="header-top-icon"
          alt="logo-teams-grey"
        />
        <span className="header-top-title">Teams</span>
        <button className="header-top-button">
          <img
            className="header-top-button-icon"
            src={logoAdd}
            alt="logo-create-new-team"
          />
          <span className="header-top-button-text">CREATE NEW TEAM</span>
        </button>
      </div>
    );
  }
}

export default HeaderTop;
