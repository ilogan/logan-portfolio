import React from "react";
import { css } from "@emotion/core";
import { contentWidth, flex } from "../utils/styleUtils";

function Heading({ title, children, backgroundColor }) {
  return (
    <div
      css={css`
        padding-top: 8rem;
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
            background-color: ${backgroundColor ? backgroundColor : "#baebff"};
            padding: 65px 0;
            border-top: 4px solid #1a202c;
            border-bottom: 4px solid #1a202c;
          `
        ]}
      >
        <div css={contentWidth}>
          <div css={css``}>
            <h1
              css={css`
                color: #ffffff;
                font-size: 3rem;
                font-weight: 700;
                padding: 4px 20px;
                background-color: #1a202c;
                width: fit-content;
                margin: 0 auto;
                margin-bottom: 48px;
                border-radius: 8px;
                margin-top: -104px;
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
    </div>
  );
}

export default Heading;
