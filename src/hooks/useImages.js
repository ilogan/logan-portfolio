// import { graphql, useStaticQuery } from "gatsby";

// const useImages = () => {
//   const data = useStaticQuery(graphql`
//     query GetAllProjects {
//       fauna {
//         allProjects {
//           data {
//             title
//             summary
//             siteUrl
//             githubUrl
//             date
//             asset {
//               id
//               url
//               type
//               cloudName
//             }
//             responsibilities {
//               text
//             }
//             technicalFeatures {
//               text
//             }
//             tags {
//               data {
//                 _id
//                 name
//                 type {
//                   color
//                   backgroundColor
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   return data.fauna.allProjects.data;
// };

// export default useImages;