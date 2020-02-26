import React, { Component } from "react";
//styles
import "./teamcard.css";
//logos
import starDefault from "../../assets/Content/star-default.svg";
import iconConv from "../../assets/Content/icon-conversations-small.svg";
import iconLeads from "../../assets/Content/icon-leads-small.svg";

class TeamCard extends Component {
  unknownTime(time) {
    if (time) {
      return <span className="content-card-date">Created {time}</span>;
    } else {
      return (
        <span className="content-card-date">Created date unspecified</span>
      );
    }
  }

  render() {
    let teamDetails = this.props.teamDetails;
    return (
      <div className="content-card">
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
            src={starDefault}
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
          <span className="content-card-leads-text">
            {teamDetails.leads_count} Leads
          </span>
        </span>
      </div>
    );
  }
}

export default TeamCard;
