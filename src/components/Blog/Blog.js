import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

export function Blog() {
  return (
    <section
      css={css`
        padding-bottom: 120px;
      `}
    >
      <div css={contentWidth}>
        <h2
          css={[
            textWidth,
            css`
              font-size: 2rem;
              padding-top: 32px;
              margin-top: 64px;
              margin-bottom: 16px;
            `
          ]}
        >
          Content need to get added here!
        </h2>
      </div>
    </section>
  );
}

const textWidth = css`
  max-width: 730px;
  margin: 0 auto;
`;
