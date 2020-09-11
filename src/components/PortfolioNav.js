import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const activeHashLink = css`
  background-color: #1a202c;
  color: #fff !important;
`;

const HashLink = styled.a`
  padding: 0.25rem 0.25rem;
  text-decoration: none;
  color: #1a202c;
  font-size: 1rem;
  &:hover {
    ${activeHashLink}
  }
  &:visited {
    color: #1a202c;
  }
  &.highlight {
    ${activeHashLink}
  }
`;

function PortfolioNav({ projects, section, setSection }) {
  return (
    <aside
      css={css`
        text-align: right;
        white-space: nowrap;
        transform: translateY(100px);
        margin: 0px 30px 0px -60px;
      `}
    >
      <div
        css={css`
          top: 0;
          position: sticky;
        `}
      >
        <ul
          css={css`
            font-weight: 600;
            > li {
              list-style-type: none;
              margin-bottom: 0.25rem;
              &:last-child {
                margin-right: 0;
              }
            }
          `}
        >
          {projects.map(project => (
            <li key={project._id}>
              <HashLink
                onClick={() => setSection(project.title)}
                className={`${section === project.title ? "highlight" : null}`}
                href={`#${project.title}`}
              >
                {project.title}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default PortfolioNav;
