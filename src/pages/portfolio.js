import React from "react";

import GlobalLayout from "../components/layouts/GlobalLayout";
import Sidebar from "../components/PortfolioApp/Sidebar";
import Dashboard from "../components/PortfolioApp/Dashboard";
import Routes from "../components/PortfolioApp/Dashboard/Routes";

export default () => (
  <GlobalLayout>
    {/* <Sidebar/> */}
    {/* <Dashboard> */}
    <Routes />
    {/* </Dashboard> */}
  </GlobalLayout>
);
