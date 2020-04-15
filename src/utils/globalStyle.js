import { css } from "@emotion/core";

const primaryDarkest = '#1A202C';
// const primaryDarker = '#2D3748';

const reset = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }
`;

const typography = css`
  body {
    font-family: Raleway, Montserrat, sans-serif;
    font-size: 1.6rem;
    color: ${primaryDarkest}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat Alternates", Montserrat, Raleway, sans-serif;
    color: ${primaryDarkest}
  }
`;

export default css([reset, typography]);
