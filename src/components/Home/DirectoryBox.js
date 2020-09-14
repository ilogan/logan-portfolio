import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const DirectoryLink = styled(Link)`
  display: block;
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border: 4px solid #1a202c;
  border-radius: 8px;
  box-shadow: 12px 12px #1a202c;
  text-align: center;
  text-decoration: none;
`;

function DirectoryBox({ title, content, color }) {
  return (
    <DirectoryLink
      to={`/${title.toLowerCase()}`}
      css={css`
        &:hover {
          background-color: ${color};
          cursor: pointer;
        }
        &:focus {
          background-color: ${color};
        }
      `}
    >
      <div
        css={css`
          padding: 16px;
          background-color: #1a202c;
          color: #ffffff;
          font-size: 1.75rem;
        `}
      >
        {title}
      </div>
      <div
        css={css`
          padding: 16px;
          color: #1a202c;
          line-height: 1rem;
        `}
      >
        {content}
      </div>
    </DirectoryLink>
  );
}

export default DirectoryBox;
