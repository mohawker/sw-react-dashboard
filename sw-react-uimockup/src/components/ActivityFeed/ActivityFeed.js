import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import Activity from "./Activity";
// styles
import "./activityfeed.css";

class ActivityFeed extends Component {
  render() {
    let activities = this.props.activities;
    return (
      <Spring
        from={{ opacity: 0, marginTop: 0 }}
        to={{ opacity: 1.0, marginTop: 42 }}
        config={{ duration: 500 }}
      >
        {props => (
          <div className="activity-feed" style={props}>
            <div className="activity-feed-top">
              <div className="activity-feed-title">Activity</div>
            </div>
            <div className="activity-feed-bot">
              {activities.map(activity => {
                return <Activity activityDetails={activity} key={activity.id} />;
              })}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default ActivityFeed;
