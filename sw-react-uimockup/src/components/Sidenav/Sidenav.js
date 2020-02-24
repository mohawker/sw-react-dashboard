import React, { Component } from "react";
import "./sidenav.css";
//logos
import logoSW from "../../assets/Sidenav/sw-logo-white.svg";
import logoCampaign from "../../assets/Sidenav/icon-campaign.svg"
import logoReports from "../../assets/Sidenav/icon-reports.svg"
import logoTeams from "../../assets/Sidenav/icon-teams.svg";
import logoLeads from "../../assets/Sidenav/icon-leads.svg"
import menuHelp from "../../assets/Sidenav/menu-help.svg"

class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="swlogo">
          <img src={logoSW} alt="sw-logo-white" />
        </div>
        <div className="sidetile">
            <img src = {logoCampaign} alt="icon-campaign" className="sidetile-logo" />
        </div>
        <div className="current-sidetile">
            <img src = {logoTeams} alt="icon-teams" className="current-sidetile-logo" />
        </div>
        <div className="sidetile">
            <img src = {logoLeads} alt="icon-leads" className="sidetile-logo" />
        </div>
        <div className="sidetile">
            <img src = {logoReports} alt="icon-reports" className="sidetile-logo" />
        </div>
        <div className="sidetile">
            <img src = {menuHelp} alt="menu-help" className="sidetile-logo" />
        </div>
      </div>
    );
  }
}

export default Sidenav;
