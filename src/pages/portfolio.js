import React from "react";
import { css } from "@emotion/core";

import Layout from "../components/layout";
import Sidebar from "../components/PortfolioApp/Sidebar";
import Dashboard from "../components/PortfolioApp/Dashboard";
import Routes from "../components/PortfolioApp/Dashboard/Routes";

const sidebarGC = css({
  gridColumn: "3 / span 2"
});

const dashboardGC = css({
  gridColumn: "5 / span 7"
});

export default () => (
  <Layout>
    <Sidebar css={sidebarGC} />
    <Dashboard css={[dashboardGC]}>
      <Routes />
    </Dashboard>
  </Layout>
);
