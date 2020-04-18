import React from "react";
import { css } from "@emotion/core";

const navbar = css({
  height: "3rem"
});

function Navbar(props) {
  return (
    <nav css={navbar} {...props}>
      <header>Navbar</header>
    </nav>
  );
}

export default Navbar;
