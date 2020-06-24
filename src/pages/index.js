import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import Home from "../components/MainSite/Home";

const homeGrid = css({
  gridColumn: "3 / span 10"
});

export default () => (
  <Layout>
    <Home css={homeGrid} />
  </Layout>
);
