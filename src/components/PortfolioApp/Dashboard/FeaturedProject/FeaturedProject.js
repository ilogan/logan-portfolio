import React from "react";
import { css } from "@emotion/core";

import ProjectCard from "./ProjectCard";

// LAYOUT
const featuredProjectGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(11, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem"
});

const contentGC = css({
  gridColumn: "span 10"
});

const numberGC = css({
  gridColumn: "span 1",
  alignSelf: "flex-end"
});

function FeaturedProject(props) {
  return (
    <div css={featuredProjectGrid}>
      {/* <ProjectBackGround /> */}
      <ProjectCard css={contentGC} {...props} />
      <ProjectNumber number={props.number} />
    </div>
  );
}

export default FeaturedProject;

// // PROJECT BACKGROUND
// function ProjectBackGround(props) {
//   const triangle = css({
//     position: "absolute",
//     height: "100%",
//     width: "100%",
//     zIndex: -1
//   });

//   const triangleTop = css({
//     clipPath: "polygon(0 0, 0% 100%, 60% 100%)",
//     backgroundColor: "#FFD845",
//     marginTop: "6rem",
//     height: "calc(100% - 6rem)"
//   });

//   return (
//     <div css={triangle}>
//       <div css={triangleTop}></div>
//     </div>
//   );
// }

// PROJECT NUMBER
function ProjectNumber({ number }) {
  const projectNumber = css({
    margin: "0 auto",
    marginBottom: "1rem",
    fontFamily: "Montserrat Alternates",
    fontSize: "3rem",
    fontWeight: "600",
    color: "#ECC94B"
  });

  return <div css={[numberGC, projectNumber]}>{number}</div>;
}
