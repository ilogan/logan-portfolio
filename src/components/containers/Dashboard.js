import React from "react";

import ProjectFeature from "../ProjectFeature";
import { ProjectFeatureMock } from "../../utils/mockData";

function Dashboard(props) {
  return (
    <div {...props}>
      <ProjectFeature {...ProjectFeatureMock} />
    </div>
  );
}

export default Dashboard;
