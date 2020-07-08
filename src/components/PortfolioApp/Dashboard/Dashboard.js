import React from "react";
import { css } from "@emotion/core";

function Dashboard(props) {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      {props.children}
    </div>
  );
}

export default Dashboard;
