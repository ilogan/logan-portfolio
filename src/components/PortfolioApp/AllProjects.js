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
            /* position: absolute; */
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;

            height: 75px;
            width: 75px;

            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
            border: 6px solid #ffffff;
            border-radius: 50%;
            background-color: #e7e7e7;
            color: #1a202c;

            font-size: 2.25rem;
            font-weight: 800;

            margin-bottom: 32px;
          `}
        >
          1
        </div>
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
        {projects.map(project => (
          <SingleProject key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
