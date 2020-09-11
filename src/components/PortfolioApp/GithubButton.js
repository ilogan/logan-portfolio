import React from "react";
import { css } from "@emotion/core";

const githubButton = css({
  color: "white",
  display: "inline-block",
  backgroundColor: "#1A202C",
  borderRadius: "2rem",
  padding: ".75rem 4.5rem",
  textDecoration: "none",
  ":visited": {
    color: "white"
  }
});

function GithubButton({ url }) {
  return (
    <div>
      <a
        css={githubButton}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}

export default GithubButton;
