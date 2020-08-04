import React from "react";
import { css } from "@emotion/core";

const tealLight = "#B2F5EA";
const tealDark = "#285E61";
const orangeLight = "#FEEBC8";
const orangeDark = "#9C4221";
const yellowLight = "#FEFCBF";
const yellowDark = "#2D3748";
const pinkDark = "#97266D";
const pinkLight = "#FED7E2";
const defaultLight = "#E2E8F0";
const defaultDark = "#2D3748";


const colors = {
  teal: [tealLight, tealDark],
  orange: [orangeLight, orangeDark],
  yellow: [yellowLight, yellowDark],
  pink: [pinkLight, pinkDark],
  default: [defaultLight, defaultDark],
};

function Tag({ color, children }) {
  const [light, dark] = colors[color || "default"];
  console.log(light, dark)
  return (
    <div
      css={css`
        color: ${dark || "#2D3748"};
        background-color: ${light || "#E2E8F0"};
        padding: 4px 8px;
        border-radius: 20px;
      `}
    >
      {children}
    </div>
  );
}

export default Tag;
