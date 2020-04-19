import React from "react";
import { Router } from "@reach/router";
import { FeaturedProjectMock } from "../../utils/mockData";

import FeaturedProject from "./Portfolio/FeaturedProject";
import PortfolioHome from "./Portfolio/Home";

function Dashboard(props) {
  return (
    <div {...props}>
      <Router basepath="portfolio">
        <FeaturedProject path=":id" {...FeaturedProjectMock} />
        <PortfolioHome path="/" />
      </Router>
    </div>
  );
}

export default Dashboard;
