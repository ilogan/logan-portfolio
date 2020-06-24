import React from "react";
import { css } from "@emotion/core";
import { Global } from "@emotion/core";
import globalStyle from "../utils/globalStyle";

import Navbar from "./Navbar";

const layoutGrid = css({
  display: "grid",
  gridTemplateColumns: "1rem repeat(12, 1fr) 1rem",
  gridTemplateRows: "auto",
  gridGap: ".5rem"
});

const navbarGC = css({
  gridColumn: "14 span"
});

export default ({ children }) => (
  <div css={layoutGrid}>
    <Global styles={globalStyle} />
    <Navbar css={navbarGC} />
    {children}
  </div>
);
