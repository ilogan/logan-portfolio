import React from "react";
import SingleProject from "./SingleProject";

function AllProjects({ projects }) {
  return (
    <div>
      {projects.map(project => (
        <SingleProject key={project._id} project={project} />
      ))}
    </div>
  );
}

export default AllProjects;
