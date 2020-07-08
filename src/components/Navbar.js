import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  &.current-page {
    border-bottom: 1px solid #ffd845;
  }
`;

function Navbar() {
  return (
    <header
      css={css`
        padding: 1.25rem 0;
        background-color: #1a202c;
        margin-bottom: 3rem;
      `}
    >
      <nav
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          max-width: 1080px;
          padding: 0.5rem 2.5rem;
        `}
      >
        <div
          css={css`
            font-size: 1.5rem;
          `}
        >
          <NavLink to="/">Ian Logan</NavLink>
        </div>
        <div>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
