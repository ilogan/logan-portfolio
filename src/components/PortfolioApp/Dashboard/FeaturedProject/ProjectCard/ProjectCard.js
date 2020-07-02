import React from "react";
import { css } from "@emotion/core";
import { Image } from "cloudinary-react";

import Pill from "./Pill";
// import PieChart from "./PieChart";
import GithubButton from "./GithubButton";
import CardBackground from "./CardBackground";

const cardContainer = css({
  position: "relative",
  maxWidth: "65rem",
  padding: "3rem 4rem",
  paddingBottom: "0",
  marginBottom: "1rem",
  boxShadow: "0 4px 10px rgba(0,0,0,20%)",
  borderRadius: "1rem",
  borderBottom: "1rem solid #FFD845"
});

const header = css({
  gridColumn: "span 10",
  marginBottom: "3rem"
});

const headerTop = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const headerDate = css({
  fontFamily: "Montserrat Alternates",
  fontSize: ".875rem",
  color: "#718096"
});

const headerSiteUrl = css({
  fontFamily: "Montserrat Alternates",
  fontSize: "1.125rem"
});

const main = css({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr) .5fr repeat(4, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem",
  marginTop: "1rem",
  gridColumn: "span 10"
});

const left = css({
  gridColumn: " 1 / span 4"
});

const leftImageContainer = css({
  height: "15rem",
  width: "100%",
  overflow: "hidden",
  borderRadius: "1rem",
  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "3rem"
});

const leftImage = css({
  width: "100%"
});

const leftTech = css({
  display: "flex",
  justifyContent: "space-around"
});

const right = css({
  position: "relative",
  gridColumn: " 6 / span 4",
  display: "flex",
  flexDirection: "column"
});

const summaryContainer = css({
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: "1.5rem",
  marginBottom: "3rem"
});

const cardH2 = css({
  fontSize: "1.25rem"
});

const tasksContainer = css({
  listStyle: "none",
  lineHeight: "1.5rem",
  padding: 0,
  marginLeft: 0,
  fontSize: ".875rem",
  marginTop: ".5rem",
  marginBottom: "6rem"
});

const liTask = css({
  paddingLeft: "1rem",
  textIndent: "-1.25rem",
  fontWeight: 500,
  "&::before": {
    content: '"•"',
    paddingRight: "10px",
    color: "#FFD845",
    verticalAlign: "middle",
    fontSize: "1.75rem"
  }
});

const githubContainer = css({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
  marginTop: "auto",
  marginBottom: "2rem",
  textAlign: "center",
  fontSize: "1.25rem"
});

const montserratAlt = css({
  fontFamily: "Montserrat Alternates"
});

// const pieChart = css({
//   marginTop: "1rem",
//   marginBottom: "1rem",
//   width: "14rem",
//   borderRadius: "100%",
//   backgroundColor: "white"
// });

const pillBorder = css({
  borderBottom: "3px solid #ECC94B"
});

function ProjectContent({ project, className }) {
  // todo transform date
  console.log(project.date);
  return (
    <div className={className} css={cardContainer}>
      <header css={header}>
        <div css={headerTop}>
          <h1>{project.title}</h1>
          <div css={headerDate}>{project.date}</div>
        </div>
        <a href={project.siteUrl} target="_blank" css={headerSiteUrl}>
          {project.siteUrl}
        </a>
      </header>
      <main css={main}>
        <div css={left}>
          <div css={leftImageContainer}>
            <Image
              css={leftImage}
              publicId={project.asset.id}
              cloudName={project.asset.cloudName}
              alt="Project"
            />
          </div>
          <div css={leftTech}>
            {project.tech.map((t, i) => (
              <Pill key={t + i} border={pillBorder} name={t} />
            ))}
          </div>
          {/* <div css={pieChart}>
            <PieChart data={data} />
          </div> */}
        </div>
        <div css={right}>
          <div css={summaryContainer}>
            <p>{project.summary}</p>
          </div>
          <h2 css={cardH2}>Key Responsibilities</h2>
          <ul css={tasksContainer}>
            {project.keyTasks.map((task, i) => (
              <li key={`task_${i}`} css={liTask}>
                {task}
              </li>
            ))}
          </ul>
          <div css={[githubContainer, montserratAlt]}>
            <div>more info on</div>
            <GithubButton url={project.githubUrl} />
          </div>
        </div>
      </main>
      <CardBackground />
    </div>
  );
}

export default ProjectContent;
