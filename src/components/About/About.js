import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

export function About() {
  return (
    <section
      css={css`
        background-color: #ffffff;
      `}
    >
      <div css={contentWidth}>
        <h2>Here is where I'll write about myself</h2>
        <p>I'll also put some content</p>
      </div>
    </section>
  );
}
