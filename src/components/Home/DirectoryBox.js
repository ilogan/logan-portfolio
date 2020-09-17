import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const DirectoryLink = styled(Link)`
  display: block;
  width: 300px;
  background-color: #ffffff;
  border: 4px solid #1a202c;
  border-radius: 8px;
  box-shadow: 12px 12px #1a202c;
  text-align: center;
  text-decoration: none;
`;

function DirectoryBox({ title, content, color, svg: SVG }) {
  return (
    <DirectoryLink
      to={`/${title.toLowerCase()}`}
      css={css`
        margin-bottom: 64px;
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
          height: 225px;
          padding: 50px 30px 40px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            color: #1a202c;
          `}
        >
          {content}
        </div>
        <div>
          <SVG width="50px" stroke="#1a202c" />
        </div>
      </div>
    </DirectoryLink>
  );
}

export default DirectoryBox;
