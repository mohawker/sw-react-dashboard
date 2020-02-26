import React, { Component } from "react";
import Activity from "./Activity"
//styles
import "./activityfeed.css";

class ActivityFeed extends Component {
  render() {
    let activities = this.props.activities;
    return (
      <div className="activity-feed">
        <div className="activity-feed-top">
          <div className="activity-feed-title">Activity</div>
        </div>
        <div className="activity-feed-bot">
        {activities.map(activity => {
            return <Activity activityDetails={activity} key={activity.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default ActivityFeed;
