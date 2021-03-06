import { css } from "@emotion/core";
import { bp } from "../utils/styleUtils";

const primaryDarkest = "#1A202C";
// const primaryDarker = '#2D3748';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-size: 1rem;
    @media (min-width: ${bp.sm}) {
      font-size: 1.125rem;
    }
    background-color: #e2e2e2;
  }
`;

const typography = css`
  body {
    font-family: Bitter, sans-serif;
    font-weight: 500;
    color: ${primaryDarkest};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Bitter, sans-serif;
    font-weight: 700;
    color: ${primaryDarkest};
  }

  h2 {
    font-size: 2.5rem;
    @media (min-width: ${bp.sm}) {
      font-size: 3rem;
    }
    @media (min-width: ${bp.md}) {
      font-size: 4rem;
    }
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  p {
    line-height: 1.7;
    margin-bottom: 1.55rem;
    color: #1a202c;
  }

  small {
    display: block;
    font-weight: 400;
    font-size: 0.75rem;
  }

  ul {
    padding-left: 1.25rem;
  }

  li {
    line-height: 1.7rem;
    margin-bottom: calc(1.55rem / 2);
  }
`;

export default css([reset, typography]);
