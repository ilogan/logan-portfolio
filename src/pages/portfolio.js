import React from "react";
import GlobalLayout from "../components/layouts/GlobalLayout";
import Heading from "../components/Heading";
import AllProjects from "../components/PortfolioApp/AllProjects";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childCloudinaryAsset {
            fluid(transformations: ["c_scale", "w_832"]) {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
      fauna {
        allProjects {
          data {
            _id
            title
            summary
            siteUrl
            githubUrl
            date
            asset {
              id
              url
              type
              cloudName
            }
            responsibilities {
              text
            }
            technicalFeatures {
              text
            }
            tags {
              data {
                _id
                name
                type {
                  color
                  backgroundColor
                }
              }
            }
          }
        }
      }
    }
  `);

  // merge image from cloudinary with data from fauna
  const projectList = data.fauna.allProjects.data;
  const imageList = data.allFile.nodes;
  const projectWithImageList = projectList.map(project => {
    const image = imageList.find(image => image.name === project.asset.id);
    return { ...project, fluid: { ...image.childCloudinaryAsset.fluid } };
  });

  return (
    <GlobalLayout>
      <Heading title="Portfolio">Here are some of my favorite projects I've made exploring different technologies.</Heading>
      <AllProjects projects={projectWithImageList} />
    </GlobalLayout>
  );
};
