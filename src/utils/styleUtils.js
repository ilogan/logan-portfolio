import { css } from "@emotion/core";
import styled from "@emotion/styled";

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

export const textWidth = css`
  max-width: 730px;
  margin: 0 auto;
`;

// styled components
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  > li {
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
