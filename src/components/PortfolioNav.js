import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { bp } from "../utils/styleUtils";

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
        background: #ffffff;
        padding-top: 16px;
        padding-bottom: 20px;
        text-align: center;
        width: 100vw;
        transform: translateX(-32px);
        @media (min-width: ${bp.md}) {
          transform: translateX(-80px);
        }
        @media (min-width: ${bp.lg}) {
          background: none;
          padding-top: 0px;
          margin-bottom: 0px;
          text-align: right;

          white-space: nowrap;
          transform: translateY(100px);
          margin: 0px 60px 0px -60px;
          width: 100%;
        }
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
            padding-left: 0;
            > li {
              list-style-type: none;
              margin-bottom: 0.25rem;
              &:last-child {
                margin-right: 0;
              }
            }
            @media (min-width: ${bp.lg}) {
              padding-left: 1.25rem;
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
