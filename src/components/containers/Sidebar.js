import React from "react";

import { css } from "@emotion/core";

const sidebar = css({
  gridColumn: "span 1"
  // backgroundColor: "teal"
});

function Sidebar() {
  return <aside css={sidebar}>Sidebar</aside>;
}

export default Sidebar;
