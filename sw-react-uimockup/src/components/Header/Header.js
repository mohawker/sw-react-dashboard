import React, { Component } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBot from "./HeaderBot";
//styles
import "./header.css";

class Header extends Component {
  
  render() {
    let AllStyle = this.props.AllStyle;
    let FavStyle = this.props.FavStyle;
    let ArcStyle = this.props.ArcStyle;
    return (
      <div className="header">
        <HeaderTop />
        <HeaderBot
          AllStyle={AllStyle}
          FavStyle={FavStyle}
          ArcStyle={ArcStyle}
          changeTabAll={this.props.changeTabAll}
          changeTabFav={this.props.changeTabFav}
          changeTabArc={this.props.changeTabArc}
        />
      </div>
    );
  }
}

export default Header;
