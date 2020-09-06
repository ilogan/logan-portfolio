import React, { useState } from "react";
import { contentWidth, flex } from "../../utils/styleUtils";
import SingleProject from "./SingleProject";
import PortfolioNav from "../PortfolioNav";

function AllProjects({ projects }) {
  const [section, setSection] = useState(projects[0].title);
  return (
    <div css={[contentWidth, flex]}>
      <PortfolioNav
        projects={projects}
        section={section}
        setSection={setSection}
      />
      <div>
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
