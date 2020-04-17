import React from "react";
import { css } from "@emotion/core";

import PieChart from "./PieChart";
import Pill from "./Pill";
import GithubButton from "./GithubButton";

const container = css({
  position: "relative",
  display: "grid",
  gridTemplateColumns: ".5fr repeat(4, 1fr) .5fr repeat(4, 1fr) .5fr",
  gridTemplateRows: "auto",
  gridGap: ".5rem",
  maxWidth: "65rem",
  marginBottom: "1rem"
});

const header = css({
  gridColumn: "2 / span 9"
});

const headerTop = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const headerUpdate = css({
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
  gridColumn: "2 / span 9"
});

const left = css({
  gridColumn: " 1 / span 4"
});

const leftImageContainer = css({
  height: "15rem",
  width: "100%",
  overflow: "hidden",
  borderRadius: "1rem",
  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)"
});

const leftImage = css({
  width: "100%"
});

const leftTech = css({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1.5rem"
});

const right = css({
  position: "relative",
  gridColumn: " 6 / span 4",
  display: "flex",
  flexDirection: "column"
});

const summaryContainer = css({
  textAlign: "justify",
  borderRight: "2px solid #ECC94B",
  paddingRight: "2rem",
  height: "20rem",
  overflow: "hidden"
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

const triangle = css({
  position: "absolute",
  zIndex: -1,
  clipPath: "polygon(0 0, 0% 100%, 60% 100%)",
  backgroundColor: "#FAF089",
  width: "100%",
  marginTop: "4rem",
  height: "calc(100% - 4rem)"
});

const triangleBottom = css({
  position: "absolute",
  zIndex: -1,
  bottom: "0",
  height: "1rem",
  width: "100%",
  backgroundColor: "#FAF089"
});

const pieChart = css({
  marginTop: "1rem",
  width: "14rem",
  borderRadius: "100%",
  backgroundColor: "white"
});

const pillBorder = css({
  borderBottom: "3px solid #ECC94B"
});

const projectNumber = css({
  fontFamily: "Montserrat Alternates",
  fontSize: "2rem",
  fontWeight: "600",
  alignSelf: "flex-end",
  margin: "0 auto",
  color: "#ECC94B"
});

function ProjectFeature({
  title,
  number,
  summary,
  lastUpdate,
  tech,
  siteUrl,
  imageUrl,
  githubUrl
}) {
  return (
    <div css={container}>
      <div css={triangle}></div>
      <div css={triangleBottom}></div>
      <header css={header}>
        <div css={headerTop}>
          <h1>{title}</h1>
          <div css={headerUpdate}>Updated {lastUpdate}</div>
        </div>
        <div css={headerSiteUrl}>{siteUrl}</div>
      </header>
      <main css={main}>
        <div css={left}>
          <div css={leftImageContainer}>
            <img css={leftImage} src={imageUrl} alt="Project" />
          </div>
          <div css={leftTech}>
            <Pill border={pillBorder} name={tech.first} />
            <Pill border={pillBorder} name={tech.second} />
            <Pill border={pillBorder} name={tech.third} />
          </div>
          <div css={pieChart}>
            <PieChart />
          </div>
        </div>
        <div css={right}>
          <div css={summaryContainer}>
            <p>{summary}</p>
          </div>
          <div css={[githubContainer, montserratAlt]}>
            <div>more info on</div>
            <GithubButton url={githubUrl} />
          </div>
        </div>
      </main>
      <div css={projectNumber}>{number}</div>
    </div>
  );
}

export default ProjectFeature;
