import React from "react";
import { css } from "@emotion/core";
import { Global } from "@emotion/core";
import globalStyle from "../utils/globalStyle";

import Navbar from "./Navbar";

const grid = css({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem"
});

const navGrid = css({
  gridColumn: "12 span"
});

export default ({ children }) => (
  <div css={grid}>
    <Global styles={globalStyle} />
    <Navbar css={navGrid} />
    {children}
  </div>
);
