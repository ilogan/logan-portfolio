import React from "react";
import { css } from "@emotion/core";

import ProjectFeature from "../ProjectFeature";
import { ProjectFeatureMock } from "../../utils/mockData";

const dashboard = css({
  gridColumn: "span 10"
  //backgroundColor: "red"
});

function Dashboard() {
  return (
    <div css={dashboard}>
      <ProjectFeature {...ProjectFeatureMock} />
    </div>
  );
}

export default Dashboard;
