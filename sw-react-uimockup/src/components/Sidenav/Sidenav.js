import React, { Component } from "react";
import "./sidenav.css";
import Sidetile from "./Sidetile";
//logos
import logoSW from "../../assets/Sidenav/sw-logo-white.svg";
import logoCampaign from "../../assets/Sidenav/icon-campaign.svg";
import logoReports from "../../assets/Sidenav/icon-reports.svg";
import logoTeams from "../../assets/Sidenav/icon-teams.svg";
import logoLeads from "../../assets/Sidenav/icon-leads.svg";
import menuHelp from "../../assets/Sidenav/menu-help.svg";

class Sidenav extends Component {
  render() {
    let sideLogos = [
      { id: 1, name: "Campaigns", image: logoCampaign, style: "sidetile" },
      { id: 2, name: "Reports", image: logoReports, style: "sidetile" },
      { id: 3, name: "Teams", image: logoTeams, style: "sidetile sidetile-current" },
      { id: 4, name: "Leads", image: logoLeads, style: "sidetile" },
      { id: 5, name: "Help", image: menuHelp, style: "sidetile" }
    ];
    return (
      <div className="sidenav">
        <div className="sidenav-swlogo">
          <img src={logoSW} alt="sw-logo-white" />
        </div>
        {sideLogos.map(logo => {
          return (
            <Sidetile
              logoSrc={logo.image}
              key={logo.id}
              name={logo.name}
              style={logo.style}
            />
          );
        })}
      </div>
    );
  }
}

export default Sidenav;
