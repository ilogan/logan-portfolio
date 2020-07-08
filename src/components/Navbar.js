import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

const yellow = "#FFD845";
const salmon = "#f49097";
const mauve = "#dfb2f4";
const khaki = "#faf089";
const maize = "#ecc94b";
const steel = "#3f7cac";
const pewter = "#95afba";
const rose = "#ff5964";
const pink = "#ffacb2";

const primary = yellow;
const secondary = pink;

// TAG CHANGES SCOPED TO NAVBAR
const navbarGlobals = css({
  a: {
    color: "white",
    textDecoration: "none",
    "&:visited": {
      color: "white"
    },
    "&:hover": {
      color: primary
    }
  }
});

// OVERALL STYLES

const navbar = css({
  height: "4rem",
  backgroundColor: "#1a202c",
  marginBottom: "3rem"
});

const contentGC = css({
  gridColumn: "2 / span 10"
});

const contentContainer = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const left = css({
  fontSize: "1.5rem"
});

const nameContainer = css({
  display: "inline-block",
  padding: ".25rem"
});

function Navbar(props) {
  return (
    <nav css={[navbar, navbarGlobals]}>
      <div css={[contentGC, contentContainer]}>
        <div css={left}>
          <Link to="/">
            <div css={nameContainer}>Ian Logan</div>
          </Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
