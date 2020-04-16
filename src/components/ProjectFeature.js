import React from "react";
import { css } from "@emotion/core";

const container = css({
  position: "relative",
  display: "grid",
  gridTemplateColumns: ".5fr repeat(4, 1fr) .5fr repeat(4, 1fr) .5fr",
  gridTemplateRows: "auto",
  gridGap: ".5rem",
  maxWidth: "65rem"
});

const header = css({
  gridColumn: "2 / span 9"
});

const headerTop = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
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
  justifyContent: "space-around"
});

const right = css({
  position: "relative",
  gridColumn: " 6 / span 4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
});

const summaryContainer = css({
  textAlign: "justify",
  borderRight: "2px solid #ECC94B",
  paddingRight: "2rem"
});

const rightGithub = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "right"
});

const montserratAlt = css({
  fontFamily: "Montserrat Alternates"
});

const lightGray = css({
  color: "#718096"
});

const triangle = css({
  position: "absolute",
  zIndex: -1,
  clipPath: "polygon(0 0, 0% 100%, 60% 100%)",
  backgroundColor: "#FEFCBF",
  width: "100%",
  marginTop: "4rem",
  height: "30rem"
});

function ProjectFeature({
  title,
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
      <header css={header}>
        <div css={headerTop}>
          <h1>{title}</h1>
          <div css={[montserratAlt, lightGray]}>Updated {lastUpdate}</div>
        </div>
        <div css={montserratAlt}>{siteUrl}</div>
      </header>
      <main css={main}>
        <div css={left}>
          <div css={leftImageContainer}>
            <img css={leftImage} src={imageUrl} alt="Project" />
          </div>
          <div css={leftTech}>
            <div>{tech.first}</div>
            <div>{tech.second}</div>
            <div>{tech.third}</div>
          </div>
        </div>
        <div css={right}>
          <div css={summaryContainer}>
            <p>{summary}</p>
          </div>
          <div css={rightGithub}>
            more info on
            <a href={githubUrl}>GitHub</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectFeature;
