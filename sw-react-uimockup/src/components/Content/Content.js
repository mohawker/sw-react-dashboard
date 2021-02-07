import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import TeamCard from "./TeamCard";
// styles
import "./content.css";

export class Content extends Component {
  render() {
    let teams = this.props.teams;
    let selection = this.props.select;
    return (
      <Spring
        from={{ opacity: 0, marginTop: 84 }}
        to={{ opacity: 1.0, marginTop: 42 }}
        config={{ duration: 250 }}
      >
        {props => (
          <div className="content" style={props}>
            <div className="content-top">
              <span className="content-title">{selection} Teams</span>
              <span className="content-count">
                Showing {teams.length} of {teams.length} teams
              </span>
            </div>
            <div className="content-bot">
              {teams.map(team => {
                return (
                  <TeamCard
                    teamDetails={team}
                    key={team.id}
                    fetchData={this.props.fetchData}
                    appendFavorite={this.props.appendFavorite}
                  />
                );
              })}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Content;
