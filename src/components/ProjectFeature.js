import React from "react";
import { css } from "@emotion/core";

const grid = css({
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem"
});

const header = css({
  gridColumn: "span 9"
});

const headerTop = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const main = css({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "auto",
  gridGap: ".5rem",
  marginTop: "1rem",
  gridColumn: "span 9"
});

const left = css({
  gridColumn: "span 4"
});

const leftImageContainer = css({
  height: "100%",
  width: "100%"
});

const leftImage = css({
  borderRadius: "1rem",
  boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)"
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

const rightSummary = css({
  textAlign: "justify"
});

const rightGithub = css({
  display: "flex",
  flexDirection: "column",
  textAlign: "right"
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
    <div css={grid}>
      <header css={header}>
        <div css={headerTop}>
          <h1>{title}</h1>
          <div>Updated {lastUpdate}</div>
        </div>
        <div>{siteUrl}</div>
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
          <p css={rightSummary}>{summary}</p>
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
