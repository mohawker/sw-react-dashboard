import React, { Component } from "react";
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
      src: starDefault,
      hovered: false
    };
    this.toggleStar = this.toggleStar.bind(this);
  }

  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });

  toggleStar() {
    if (this.state.src === starDefault) {
      this.setState({ src: starActive });
    } else {
      this.setState({ src: starDefault });
    }
  }

  unknownTime(time) {
    if (time) {
      return <span className="content-card-date">Created {time}</span>;
    } else {
      return <span className="content-card-date">Created date unspecified</span>;
    }
  }

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
              <img
                className="content-card-star"
                alt="content-card-logo"
                src={this.state.src}
                onClick={this.toggleStar}
              ></img>
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
