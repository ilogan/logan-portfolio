import React from "react";
import { Global, css } from "@emotion/core";
import globalStyle from "../utils/globalStyle";

import Navbar from "./Navbar";

const contentWidth = css`
  display: flex;
  margin: 0 auto;
  max-width: 1160px;
  padding: 0 2.5rem;
`;

export default ({ children }) => (
  <div>
    <Global styles={globalStyle} />
    <Navbar contentWidth={contentWidth} />
    <div css={contentWidth}>{children}</div>
  </div>
);
