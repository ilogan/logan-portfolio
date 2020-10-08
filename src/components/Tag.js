import React from "react";
import { css } from "@emotion/core";

const defaultLight = "#E2E8F0";
const defaultDark = "#2D3748";

function Tag({ color, backgroundColor, children }) {
  return (
    <div
      css={css`
        border: 4px solid white;
        font-weight: 600;
        /* box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); */
        color: ${color || defaultDark};
        background-color: ${backgroundColor || defaultLight};
        line-height: 24px;
        padding: 1px 12px;
        border-radius: 20px;
      `}
    >
      {children}
    </div>
  );
}

export default Tag;
