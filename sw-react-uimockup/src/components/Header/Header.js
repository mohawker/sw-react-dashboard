import React, { Component } from "react";
import "./header.css";
//logos
import logoTeamsGrey from "../../assets/Header/logoTeamsGrey.svg";
import logoAdd from "../../assets/Header/logoAdd.svg";
import logoSearch from "../../assets/Header/icon-search.svg";

class Header extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <img
            src={logoTeamsGrey}
            className="header-icon"
            alt="logo-teams-grey"
          />
          <span className="header-title">Teams</span>
          <button className="header-button">
            <img
              className="header-button-icon"
              src={logoAdd}
              alt="logo-create-new-team"
            />
            <span className="header-button-text">CREATE NEW TEAM</span>
          </button>
        </div>
        <div className="header-bottom">
          <span
            className={this.props.AllStyle}
            onClick={this.props.changeTabAll}
          >
            {" "}
            <span className={this.props.AllStyle + "-text"}>All</span>
          </span>
          <span
            className={this.props.FavStyle}
            onClick={this.props.changeTabFav}
          >
            {" "}
            <span className={this.props.FavStyle + "-text"}>Favorites</span>
          </span>
          <span
            className={this.props.ArcStyle}
            onClick={this.props.changeTabArc}
          >
            {" "}
            <span className={this.props.ArcStyle + "-text"}>Archived</span>
          </span>
          <img
            src={logoSearch}
            alt="search-logo"
            className="header-search-logo"
          />
          <input type="text" placeholder="Search team name ..." />
        </div>
      </div>
    );
  }
}

export default Header;
