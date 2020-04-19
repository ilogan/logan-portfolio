import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const navbar = css({
  height: "3rem"
});

function Navbar(props) {
  return (
    <nav css={navbar} {...props}>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  );
}

export default Navbar;
