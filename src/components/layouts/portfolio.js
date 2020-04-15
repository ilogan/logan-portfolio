import React from "react";
import { Global, css } from "@emotion/core";

import globalStyle from "../../utils/globalStyle";

const layout = css({
  display: "flex"
});

export default ({ children }) => (
  <div css={layout}>
    <Global styles={globalStyle} />
    {children}
  </div>
);
