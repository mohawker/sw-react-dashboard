import React, { Component } from "react";
// CSS File
import "./App.css";
// Components
import Sidenav from "./components/Sidenav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllSelect: true,
      FavSelect: false,
      ArcSelect: false,
      AllStyle: "header-tabs-current",
      FavStyle: "header-tabs",
      ArcStyle: "header-tabs"
    };
    this.changeTabAll = this.changeTabAll.bind(this);
    this.changeTabFav = this.changeTabFav.bind(this);
    this.changeTabArc = this.changeTabArc.bind(this);
  }

  changeTabAll() {
    this.setState({
      AllSelect: true,
      FavSelect: false,
      ArcSelect: false,
      AllStyle: "header-tabs-current",
      FavStyle: "header-tabs",
      ArcStyle: "header-tabs"
    });
  }

  changeTabFav() {
    this.setState({
      AllSelect: false,
      FavSelect: true,
      ArcSelect: false,
      AllStyle: "header-tabs",
      FavStyle: "header-tabs-current",
      ArcStyle: "header-tabs"
    });
  }

  changeTabArc() {
    this.setState({
      AllSelect: false,
      FavSelect: false,
      ArcSelect: true,
      AllStyle: "header-tabs",
      FavStyle: "header-tabs",
      ArcStyle: "header-tabs-current"
    });
  }

  render() {
    return (
      <div className="app">
        <Sidenav />
        <div className="app-body">
          <Navbar />
          <Header
            AllStyle={this.state.AllStyle}
            FavStyle={this.state.FavStyle}
            ArcStyle={this.state.ArcStyle}
            changeTabAll={this.changeTabAll}
            changeTabFav={this.changeTabFav}
            changeTabArc={this.changeTabArc}
          />
        </div>
      </div>
    );
  }
}

export default App;
