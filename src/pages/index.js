import React from "react";
import { css } from "@emotion/core";
import { Global } from "@emotion/core";
import globalStyle from "../utils/globalStyle";

import Navbar from "../components/containers/Navbar";
import Sidebar from "../components/containers/Sidebar";
import Dashboard from "../components/containers/Dashboard";

const grid = css({
  display: "grid",
  gridTemplateColumns: "repeat(11, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem"
});

export default () => (
  <div css={grid}>
    <Global styles={globalStyle} />
    <Navbar />
    <Sidebar />
    <Dashboard />
  </div>
);
