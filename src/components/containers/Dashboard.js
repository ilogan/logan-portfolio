import React from "react";
import { Router } from "@reach/router";
import { FeaturedProjectMock } from "../../utils/mockData";
import FeaturedProject from "./Portfolio/FeaturedProject";

function Dashboard(props) {
  return (
    <div {...props}>
      <Router basepath="portfolio">
        <FeaturedProject path=":id" {...FeaturedProjectMock} />
      </Router>
    </div>
  );
}

export default Dashboard;
