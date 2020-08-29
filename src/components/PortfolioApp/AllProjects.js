import React from "react";
import SingleProject from "./SingleProject";
import { contentWidth, flex } from "../../utils/styleUtils";
import { css } from "@emotion/core";
function AllProjects({ projects }) {
  return (
    <div css={[contentWidth, flex]}>
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
          <div
            css={css`
              font-weight: 600;
              > div {
                margin-bottom: 0.5rem;
                &:last-child {
                  margin-right: 0;
                }
              }
            `}
          >
            <div
              css={css`
                background-color: #1a202c;
                color: white;
                padding: 0.25rem 0.25rem;
              `}
            >
              Ultimate Werewolf
            </div>
            <div>Office</div>
          </div>
        </div>
      </aside>
      <div>
        {projects.map((project, i) => (
          <SingleProject key={project._id} project={project} number={i+1} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
