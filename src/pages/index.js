import React from "react";

import PortfolioLayout from "../components/layouts/portfolio";
import Navbar from "../components/containers/Navbar";
import Sidebar from "../components/containers/Sidebar";
import Dashboard from "../components/containers/Dashboard";

export default () => (
  <PortfolioLayout>
    <Navbar />
    <Sidebar />
    <Dashboard />
  </PortfolioLayout>
);
