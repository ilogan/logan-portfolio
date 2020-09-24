import React from "react";
import { css } from "@emotion/core";
import { contentWidth, bp } from "../../utils/styleUtils";

import BookSVG from "./assets/book-open.svg";
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
            margin-right: -32px;
            @media (min-width: ${bp.md}) {
              margin-right: -56px;
            }
            @media (min-width: ${bp.lg}) {
              margin-right: -64px;
            }
          `}
        >
          <DirectoryBox
            title="Blog"
            content="My digital journal."
            color="#99eaff"
            svg={BookSVG}
          />
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
