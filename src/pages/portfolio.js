import React from "react";
import useProjects from "../hooks/useProjects";
import GlobalLayout from "../components/layouts/GlobalLayout";
import SingleProject from "../components/PortfolioApp/SingleProject";

export default () => {
  const projectList = useProjects();
  return (
    <GlobalLayout>
      <SingleProject project={projectList[0]} />
    </GlobalLayout>
  );
};
