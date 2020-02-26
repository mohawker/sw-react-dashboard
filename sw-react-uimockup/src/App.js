import React, { Component } from "react";
// dependencies
import axios from "axios";
// styles
import "./App.css";
// components
import Loading from "./components/Loading/Loading";
import Sidenav from "./components/Sidenav/Sidenav";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      select: "All",
      activities: [],
      currentUser: {},
      AllTeams: [],
      FavoriteTeams: [],
      ArchivedTeams: [],
      AllStyle: "header-tab-current",
      FavStyle: "header-tab",
      ArcStyle: "header-tab"
    };
    this.changeTabAll = this.changeTabAll.bind(this);
    this.changeTabFav = this.changeTabFav.bind(this);
    this.changeTabArc = this.changeTabArc.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  // fetch data from JSON-Server API & filter data
  fetchData = () => {
    this.setState({ loading: true });
    axios
      .get("https://sw-test-api.herokuapp.com/db")
      .then(res => {
        this.setState({
          loading: false,
          AllTeams: res.data.teams,
          FavoriteTeams: res.data.teams.filter(teams => teams.is_favorited),
          ArchivedTeams: res.data.teams.filter(teams => teams.is_archived),
          activities: res.data.activities,
          currentUser: res.data.current_user
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //tab methods to set state and render content
  changeTabAll() {
    this.setState({
      AllStyle: "header-tab-current",
      FavStyle: "header-tab",
      ArcStyle: "header-tab",
      select: "All"
    });
  }

  changeTabFav() {
    this.setState({
      AllStyle: "header-tab",
      FavStyle: "header-tab-current",
      ArcStyle: "header-tab",
      select: "Favorite"
    });
  }

  changeTabArc() {
    this.setState({
      AllStyle: "header-tab",
      FavStyle: "header-tab",
      ArcStyle: "header-tab-current",
      select: "Archived"
    });
  }

  render() {
    let currentSelect = this.state.select + "Teams";
    return (
      <div className="app">
        <Sidenav />
        {this.state.loading === true ? (
          <div className="app-loading">
          <Loading />
          </div>
        ) : (
          <div className="app-main">
            <Navbar user={this.state.currentUser} />
            <Header
              select={this.state.select}
              AllStyle={this.state.AllStyle}
              FavStyle={this.state.FavStyle}
              ArcStyle={this.state.ArcStyle}
              changeTabAll={this.changeTabAll}
              changeTabFav={this.changeTabFav}
              changeTabArc={this.changeTabArc}
            />
            <div className="app-body">
            <Content
              teams={this.state[currentSelect]}
              select={this.state.select}
            />
            <ActivityFeed activities={this.state.activities} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
