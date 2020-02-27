import React, { Component } from "react";
// styles
import "./activity.css";

class Activity extends Component {
  decryptActivity(name, activity, target) {
    switch (activity) {
      case "increased_quota":
        return (
          <span className="activity-caption">
            <b>{name}</b> increased <b>{target}</b>'s quota.
          </span>
        );
      case "added_leads":
        return (
          <span className="activity-caption">
            <b>{name}</b> added new leads to <b>{target}</b>.
          </span>
        );
      case "archived_team":
        return (
          <span className="activity-caption">
            <b>{name}</b> archived the team <b>{target}</b>.
          </span>
        );
      default:
        return <span>Unknown Activity - Check API</span>;
    }
  }

  unknownTime(time) {
    if (time) {
      return <span className="activity-time"> {time}</span>;
    } else {
      return <span className="activity-time">Unknown Time</span>;
    }
  }

  render() {
    let activityDetails = this.props.activityDetails;
    return (
      <div className="activity">
        <div className="activity-top">
          <img
            src={activityDetails.person.avatar}
            alt="activity-avatar"
            className="activity-avatar"
          />
          {this.decryptActivity(
            activityDetails.person.name,
            activityDetails.action,
            activityDetails.target
          )}
        </div>
        <div className="activity-bottom">{this.unknownTime(activityDetails.created_at)}</div>
      </div>
    );
  }
}

export default Activity;
