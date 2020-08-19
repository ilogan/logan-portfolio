import React from "react";
import useProjects from "../hooks/useProjects";
import GlobalLayout from "../components/layouts/GlobalLayout";
import SingleProject from "../components/PortfolioApp/SingleProject";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const projectList = useProjects();
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "ultimate-werewolf-landing" }) {
        childCloudinaryAsset {
          fluid(transformations: ["c_scale", "w_832"]) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `);
  return (
    <GlobalLayout>
      <SingleProject
        project={projectList[0]}
        banner={data.file.childCloudinaryAsset.fluid}
      />
    </GlobalLayout>
  );
};
