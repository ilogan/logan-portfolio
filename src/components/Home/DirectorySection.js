import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

import DirectoryBox from "./DirectoryBox";

function Directory() {
  return (
    <section
      css={css`
        background-color: #3ea5ff;
        padding-top: 100px;
        padding-bottom: 100px;
      `}
    >
      <div css={contentWidth}>
        <nav
          css={css`
            display: flex;
            justify-content: space-around;
          `}
        >
          <DirectoryBox
            title="Portfolio"
            content="Here are some of my favorite projects I've made exploring different technologies"
            color="#fff250"
          />
        </nav>
      </div>
    </section>
  );
}

export default Directory;
