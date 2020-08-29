import React from "react";
import { css } from "@emotion/core";
import { contentWidth, flex } from "../utils/styleUtils";

function Heading({ title, children }) {
  return (
    <div
      css={css`
        padding-top: 4rem;
        padding-bottom: 2rem;
        background-color: white;
      `}
    >
      <div
        css={[
          flex,
          css`
            flex-direction: column;
            text-align: center;
            background: #baebff;
            padding: 50px 0;
            border-top: 4px solid #3ea5ff;
            border-bottom: 4px solid #3ea5ff;
          `
        ]}
      >
        <div css={contentWidth}>
          <h1
            css={css`
              color: #3ea5ff;
              font-size: 3rem;
              font-weight: 700;
              padding-bottom: 1rem;
            `}
          >
            {title}
          </h1>
          <p
            css={css`
              font-weight: 600;
              font-size: 1.5rem;
            `}
          >
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
