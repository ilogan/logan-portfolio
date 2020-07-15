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
  }
`;

const typography = css`
  body {
    font-family: Raleway, Montserrat, sans-serif;
    color: ${primaryDarkest};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat Alternates", Montserrat, Raleway, sans-serif;
    color: ${primaryDarkest};
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    margin-bottom: .5rem;
    font-family: Raleway;
    font-weight: 600;
  }

  ul {
    padding-left: 1.25rem;
  }

`;

export default css([reset, typography]);
