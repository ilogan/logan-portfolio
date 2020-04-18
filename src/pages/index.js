import React from "react";

import Layout from "../components/layout";
import Sidebar from "../components/containers/Sidebar";
import Dashboard from "../components/containers/Dashboard";

export default () => (
  <Layout>
    <Sidebar />
    <Dashboard />
  </Layout>
);
