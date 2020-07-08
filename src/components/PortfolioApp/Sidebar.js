import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

function Sidebar() {
  return (
    <aside
      css={css`
        width: 7.25rem;
        margin-right: 3rem;
        text-align: right;
      `}
    >
      <Link to="/portfolio/2">Project 2</Link>
    </aside>
  );
}

export default Sidebar;
