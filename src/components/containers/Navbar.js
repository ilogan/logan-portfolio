import React from "react";
import { css } from "@emotion/core";

const navbar = css({
  height: "3rem",
  gridColumn: "12 span",
  backgroundColor: "blue"
});

function Navbar() {
  return (
    <nav css={navbar}>
      <header>Navbar</header>
    </nav>
  );
}

export default Navbar;
