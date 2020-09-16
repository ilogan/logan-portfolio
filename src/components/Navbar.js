import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { contentWidth, UnorderedList } from "../utils/styleUtils";

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 2px solid #3ea5ff;
  }
  &.current-page {
    border-bottom: 2px solid #3ea5ff;
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
          <UnorderedList>
            <li>
              <NavLink to="/portfolio" activeClassName="current-page">
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="current-page">
                about
              </NavLink>
            </li>
          </UnorderedList>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
