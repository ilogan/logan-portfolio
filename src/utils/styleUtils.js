import { css } from "@emotion/core";

export const bp = {
  sm: "480px",
  md: "768px",
  lg: "1025px"
};

export const flex = css`
  display: flex;
`;

export const contentWidth = css`
  margin: 0 auto;
  max-width: 1160px;
  padding: 0 32px;
  @media (min-width: ${bp.md}) {
    padding: 0 80px;
  }
`;
