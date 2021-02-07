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
import Form from "./components/Content/Form";

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
      ArcStyle: "header-tab",
      search: "",
      showForm: false
    };
    this.changeTabAll = this.changeTabAll.bind(this);
    this.changeTabFav = this.changeTabFav.bind(this);
    this.changeTabArc = this.changeTabArc.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

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

  updateSearch = event => {
    this.setState({ search: event.target.value.substr(0, 20) });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  showForm = () => {
    if (this.state.showForm === true) {
      return <Form toggleForm={this.toggleForm} />;
    } else {
      console.log("hide form");
    }
  };

  appendFavorite = team => {
    let currentFavorites = this.state.FavoriteTeams;
    let currentActivity = this.state.activities;
    let activity = {
      id: currentActivity.length + 1,
      person: this.state.currentUser,
      action: "favorited_team",
      target: team.name,
      created_at: "Seconds ago"
    };
    if (currentFavorites.find(element => element.id === team.id)) {
      currentFavorites = currentFavorites.filter(element => element.id !== team.id);
      activity.action = "unfavorited_team";
    } else {
      currentFavorites.push(team);
    }
    this.setState({ FavoriteTeams: currentFavorites });
    currentActivity.unshift(activity);
    this.setState({ activities: currentActivity }, () => console.log(this.state.activities));
  };

  render() {
    const currentSelect = this.state.select + "Teams";
    const teams = this.state[currentSelect].filter(
      team => team.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    );
    return (
      <div className="app">
        {this.showForm()}
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
              search={this.state.search}
              updateSearch={this.updateSearch}
              toggleForm={this.toggleForm}
            />
            <div className="app-body">
              <Content
                teams={teams}
                select={this.state.select}
                fetchData={this.fetchData}
                appendFavorite={this.appendFavorite}
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
