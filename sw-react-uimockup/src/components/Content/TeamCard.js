import React, { Component } from "react";
import axios from "axios";
import { Spring } from "react-spring/renderprops";
// styles
import "./teamcard.css";
// assets
import starDefault from "../../assets/Content/star-default.svg";
import starActive from "../../assets/Content/star-active.svg";
import iconConv from "../../assets/Content/icon-conversations-small.svg";
import iconLeads from "../../assets/Content/icon-leads-small.svg";

class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      favorited: false
    };
    // this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentDidMount() {
    this.getFavorited();
  }

  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  getFavorited = () => this.setState({ favorited: this.props.teamDetails.is_favorited });

  unknownTime(time) {
    if (time) {
      return <span className="content-card-date">Created {time}</span>;
    } else {
      return <span className="content-card-date">Created date unspecified</span>;
    }
  }

  renderStar() {
    if (this.state.favorited) {
      return (
        <img
          className="content-card-star"
          alt="content-card-logo"
          src={starActive}
          onClick={this.handleFavorite}
        ></img>
      );
    } else {
      return (
        <img
          className="content-card-star"
          alt="content-card-logo"
          src={starDefault}
          onClick={this.handleFavorite}
        ></img>
      );
    }
  }

  // Running callback on setState to ensure state is set, prefer to fetch data on tab change rather than everytime a button is clicked
  handleFavorite = () => {
    this.setState({ favorited: !this.state.favorited }, () =>
      axios
        .patch("https://sw-test-api.herokuapp.com/teams/" + this.props.teamDetails.id, {
          is_favorited: this.state.favorited
        })
        .then(res => {
          console.log(res);
          // this.props.fetchData();
        })
        .catch(err => console.log(err))
    );
  };

  render() {
    let teamDetails = this.props.teamDetails;
    return (
      <Spring
        to={{
          transform: `scale(${this.state.hovered ? 1.05 : 1})`,
          boxShadow: this.state.hovered
            ? "0px 0px 30px rgba(0, 0, 0, 0.2)"
            : "0px 0px 30px rgba(0, 0, 0, 0.05)"
        }}
      >
        {props => (
          <div
            className="content-card"
            onMouseOver={this.setHover}
            onMouseOut={this.cancelHover}
            style={props}
          >
            <div className="content-card-top">
              <img
                className="content-card-logo"
                alt="content-card-logo"
                src={teamDetails.image}
              ></img>
              <span className="content-card-title">{teamDetails.name}</span>
              {this.unknownTime(teamDetails.created_at)}
              {this.renderStar(teamDetails.is_favorited)}
            </div>
            <div className="content-card-mid">
              <span className="content-card-text">{teamDetails.description}</span>
            </div>
            <span className="content-card-bot">
              <img
                className="content-card-campaign-icon"
                alt="content-card-campaign-icon"
                src={iconConv}
              ></img>
              <span className="content-card-campaign-text">
                {teamDetails.campaigns_count} Campaigns
              </span>
              <img
                className="content-card-leads-icon"
                alt="content-card-leads-icon"
                src={iconLeads}
              ></img>
              <span className="content-card-leads-text">{teamDetails.leads_count} Leads</span>
            </span>
          </div>
        )}
      </Spring>
    );
  }
}

export default TeamCard;
