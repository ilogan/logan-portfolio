import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { contentWidth, textWidth } from "../../utils/styleUtils";
import usePosts from "../../hooks/usePosts";

import PostPreview from "./PostPreview";

export function Blog() {
  const posts = usePosts();
  return (
    <section
      css={css`
        padding-bottom: 120px;
      `}
    >
      <div css={contentWidth}>
        <div
          css={[
            textWidth,
            css`
              padding-top: 32px;
              margin-top: 64px;
              margin-bottom: 16px;
            `
          ]}
        >
          <DateHeading>2020</DateHeading>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

const DateHeading = styled.h2`
  width: fit-content;
  font-size: 2.5rem;
  margin-bottom: 16px;
  border-bottom: 4px solid #0061b5;
`;
