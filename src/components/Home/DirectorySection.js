import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

import PortfolioSVG from "./assets/portfolio.svg";
import AboutSVG from "./assets/at-symbol.svg";

import DirectoryBox from "./DirectoryBox";

function Directory() {
  return (
    <section
      css={css`
        background-color: #3ea5ff;
        padding-top: 85px;
        padding-bottom: 60px;
      `}
    >
      <div css={contentWidth}>
        <nav
          css={css`
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          `}
        >
          <DirectoryBox
            title="Portfolio"
            content="Some of my favorite projects."
            color="#fff250"
            svg={PortfolioSVG}
          />
          <DirectoryBox
            title="About"
            content="A little bit about who I am."
            color="#ff91e7"
            svg={AboutSVG}
          />
        </nav>
      </div>
    </section>
  );
}

export default Directory;
