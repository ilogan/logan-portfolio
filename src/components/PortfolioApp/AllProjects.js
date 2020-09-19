import React, { useState } from "react";
import { css } from "@emotion/core";
import { contentWidth, bp } from "../../utils/styleUtils";
import SingleProject from "./SingleProject";
import PortfolioNav from "../PortfolioNav";

function AllProjects({ projects }) {
  const [section, setSection] = useState(projects[0].title);
  return (
    <div
      css={[
        contentWidth,
        css`
          @media (min-width: ${bp.lg}) {
            display: flex;
          }
        `
      ]}
    >
      <PortfolioNav
        projects={projects}
        section={section}
        setSection={setSection}
      />
      <div
        css={css`
          margin-bottom: 48px;
        `}
      >
        {projects.map((project, i) => (
          <SingleProject
            key={project._id}
            project={project}
            number={i + 1}
            setSection={setSection}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
