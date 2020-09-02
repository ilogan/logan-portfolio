import React from "react";
import { css } from "@emotion/core";

const activeNavLink = css`
  background-color: #1a202c;
  color: #fff !important;
`;

function PortfolioNav({ projects }) {
  return (
    <aside
      css={css`
        text-align: right;
        white-space: nowrap;
        transform: translate(-54px, 100px);
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
              margin-bottom: 0.5rem;
              &:last-child {
                margin-right: 0;
              }
            }
          `}
        >
          {projects.map(project => (
            <li key={project._id}>
              <a
                css={css`
                  padding: 0.25rem 0.25rem;
                  text-decoration: none;
                  &:hover {
                    ${activeNavLink}
                  }
                  &:visited {
                    color: #1a202c;
                  }
                `}
                href={`#${project.title}`}
              >
                {project.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default PortfolioNav;
