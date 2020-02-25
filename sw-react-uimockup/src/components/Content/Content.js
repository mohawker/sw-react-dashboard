import React, { Component } from "react";
import "./content.css";
import TeamCard from "./TeamCard";

export class Content extends Component {

  render() {
    let teams = this.props.teams;
    let selection = this.props.select;
    return (
      <div className="content">
        <div className="content-top">
          <span className="content-title">{selection} Teams</span>
          <span className="content-count">Showing {teams.length} of {teams.length} teams</span>
        </div>
        <div className="content-bot">
          {teams.map(team => {
            return <TeamCard teamDetails={team} key={team.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Content;
