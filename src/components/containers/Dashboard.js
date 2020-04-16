import React from "react";

import { css } from "@emotion/core";

const dashboard = css({
  gridColumn: "span 10",
  backgroundColor: "red"
});

function Dashboard() {
  return (
    <div css={dashboard}>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
