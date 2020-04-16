import React from "react";
import { css } from "@emotion/core";

const pill = css({
  padding: ".5rem 1rem .5rem 1rem",
  borderRadius: "2rem",
  backgroundColor: "white",
  fontSize: ".75rem",
  fontWeight: "600",
  borderBottom: "3px solid #1A202C"
});

function Pill({ name, border }) {
  return <div css={[pill, border]}>{name}</div>;
}

export default Pill;
