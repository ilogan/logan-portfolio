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

function Navbar({ contentWidth }) {
  return (
    <header
      css={css`
        padding: 1.75rem 0;
        background-color: #1a202c;
        margin-bottom: 3rem;
      `}
    >
      <nav
        css={[
          contentWidth,
          css`
            justify-content: space-between;
            align-items: center;
          `
        ]}
      >
        <div
          css={css`
            font-size: 1.5rem;
          `}
        >
          <NavLink
            to="/"
            css={css`
              font-weight: 500;
            `}
          >
            Ian Logan
          </NavLink>
        </div>
        <div>
          <NavLink to="/portfolio">portfolio</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
