import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { contentWidth } from "../utils/styleUtils";

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &.current-page {
    border-bottom: 1px solid #ffd845;
  }
`;

function Navbar() {
  return (
    <header
      css={css`
        padding: 1.75rem 0;
        background-color: #1a202c;
      `}
    >
      <nav
        css={[
          contentWidth,
          css`
            display: flex;
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
