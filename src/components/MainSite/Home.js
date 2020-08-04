import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

function Home() {
  return (
    <div css={contentWidth}>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
