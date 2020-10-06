import React from "react";
import GlobalLayout from "../components/layouts/GlobalLayout";
import { css } from "@emotion/core";

export default () => (
  <GlobalLayout>
    <section>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 100vh;
          text-align: center;
          margin: 0 64px;
          margin-top: -64px;
          justify-content: center;
        `}
      >
        <h1
          css={[
            css`
              font-size: 5rem;
              color: #750003;
            `
          ]}
        >
          404
        </h1>
        <p css={css``}>You do not belong here. Go back!</p>
      </div>
    </section>
  </GlobalLayout>
);
