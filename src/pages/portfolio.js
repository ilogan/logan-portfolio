import React from "react";

import Layout from "../components/layout";
import Sidebar from "../components/PortfolioApp/Sidebar";
import Dashboard from "../components/PortfolioApp/Dashboard";
import Routes from "../components/PortfolioApp/Dashboard/Routes";

export default () => (
  <Layout>
    <Sidebar/>
    <Dashboard>
      <Routes />
    </Dashboard>
  </Layout>
);
