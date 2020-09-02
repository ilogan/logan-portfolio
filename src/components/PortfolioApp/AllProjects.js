import React from "react";
import { contentWidth, flex } from "../../utils/styleUtils";
import SingleProject from "./SingleProject";
import PortfolioNav from "../PortfolioNav";

function AllProjects({ projects }) {
  return (
    <div css={[contentWidth, flex]}>
      <PortfolioNav projects={projects}/>
      <div>
        {projects.map((project, i) => (
          <SingleProject key={project._id} project={project} number={i + 1} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
