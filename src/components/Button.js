import React from "react";
import { css } from "@emotion/core";

const darkCSS = css`
  color: #ffffff;
  background: #1a202c;
  box-shadow: 0 1px #1a202c;
  border-bottom: 3px solid #ffffff;
  &:hover {
    background-color: #434e65;
  }
  &:focus {
    background-color: #7b879e;
  }
  &:active {
    transform: translateY(2px);
    border-bottom: 1px solid #ffffff;
    box-shadow: 0 1px #1a202c;
    margin-bottom: 2px;
  }
`;

const lightCSS = css`
  color: #1a202c;
  background: #ffffff;
  box-shadow: 0 4px #1a202c;
  border-bottom: 1px solid #1a202c;
  margin-bottom: 2px;
  &:hover {
    background-color: #e2e2e2;
  }
  &:focus {
    background-color: #c2c2c2;
  }
  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px #1a202c;
  }
`;

function Button({ children, handleClick, dark, ...props }) {
  return (
    <button
      onClick={handleClick}
      css={css`
        padding: 8px 20px;
        border: 1px solid #1a202c;
        border-radius: 8px;
        font-family: Bitter;
        font-size: 1rem;
        font-weight: 500;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          outline: none;
        }
        ${dark ? darkCSS : lightCSS}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
