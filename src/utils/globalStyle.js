import { css } from "@emotion/core";

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
    font-size: 1.125rem;
    background-color: #f7f7f7;
  }
`;

const typography = css`
  body {
    font-family: Bitter, sans-serif;
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

  h1 {
    font-size: 4rem;
  }

  h2 {
    margin-bottom: .5rem;
  }

  ul {
    padding-left: 1.25rem;
  }

`;

export default css([reset, typography]);
