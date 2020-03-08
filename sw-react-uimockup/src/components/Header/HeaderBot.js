import React, { Component } from "react";
import HeaderTab from "./HeaderTab";
// styles
import "./headerbot.css";
// assets
import logoSearch from "../../assets/Header/icon-search.svg";

class HeaderBot extends Component {
  render() {
    let AllStyle = this.props.AllStyle;
    let FavStyle = this.props.FavStyle;
    let ArcStyle = this.props.ArcStyle;
    let headerTabs = [
      { id: 1, name: "All", style: AllStyle, method: this.props.changeTabAll },
      {
        id: 2,
        name: "Favorites",
        style: FavStyle,
        method: this.props.changeTabFav
      },
      {
        id: 3,
        name: "Archived",
        style: ArcStyle,
        method: this.props.changeTabArc
      }
    ];

    return (
      <div className="header-bot">
        {headerTabs.map(tab => {
          return <HeaderTab style={tab.style} method={tab.method} key={tab.id} name={tab.name} />;
        })}
        <img src={logoSearch} alt="search-logo" className="header-bot-search-logo" />
        <input
          type="text"
          placeholder="Search team name ..."
          value={this.props.search}
          onChange={this.props.updateSearch}
        />
      </div>
    );
  }
}

export default HeaderBot;
