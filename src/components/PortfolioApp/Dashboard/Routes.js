import React from "react";
import { Router } from "@reach/router";

import FeaturedProject from "./FeaturedProject";
import SingleProject from "./SingleProject";

function Routes() {
  return (
    <Router basepath="portfolio">
      <FeaturedProject path=":id" />
      <SingleProject path="/" />
    </Router>
  );
}

export default Routes;
