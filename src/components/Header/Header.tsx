import { AppBar } from "@material-ui/core";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./header.scss";

const Header: React.FC<RouteComponentProps> = (props) => {
  return (
    <AppBar className="app-header">
      <div className="logo-container">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => props.history.push("/")}
          src={process.env.PUBLIC_URL + "/dota-2-logo.svg"}
          alt="dota logo"
        />
        <h2>DOTA app</h2>
      </div>
      <div className="search-container"></div>
    </AppBar>
  );
};

export default withRouter(Header);
