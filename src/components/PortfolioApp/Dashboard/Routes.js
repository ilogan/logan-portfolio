import React from "react";
import { Router } from "@reach/router";

import FeaturedProject from "./FeaturedProject";
import Home from "./Home";

function Routes() {
  return (
    <Router basepath="portfolio">
      <FeaturedProject path=":id" />
      <Home path="/" />
    </Router>
  );
}

export default Routes;
