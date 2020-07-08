import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

function Sidebar() {
  return (
    <aside
      css={css`
        min-width: 7.25rem;
        margin-right: 5rem;
        text-align: right;
      `}
    >
      <Link to="/portfolio/2">Project 2</Link>
    </aside>
  );
}

export default Sidebar;
