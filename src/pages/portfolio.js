import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import Sidebar from "../components/containers/Sidebar";
import Dashboard from "../components/containers/Dashboard";

const sideGrid = css({
  gridColumn: "span 1"
});

const dashGrid = css({
  gridColumn: "2 / span 10"
});

export default () => (
  <Layout>
    <Sidebar css={sideGrid} />
    <Dashboard css={dashGrid} />
  </Layout>
);
