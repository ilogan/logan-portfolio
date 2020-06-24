import React from "react";
import { css } from "@emotion/core";

function CardBackground() {
  const triangle = css({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -1
  });

  const triangleTop = css({
    clipPath: "polygon(0 0, 0% 100%, 60% 100%)",
    backgroundColor: "#FFD845",
    marginTop: "8rem",
    height: "calc(100% - 8rem)"
  });

  return (
    <div css={triangle}>
      <div css={triangleTop}></div>
    </div>
  );
}

export default CardBackground;
