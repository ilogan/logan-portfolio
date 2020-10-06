import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";

function PostPreview({ post }) {
  return (
    <PostLink to={post.slug}>
      <article
        css={css`
          padding: 12px 0px;
          /* margin-bottom: 10px; */
          border-radius: 8px;
          &:hover > h3 {
            color: #0061b5;
          }
        `}
      >
        <time
          css={css`
            font-size: 0.75rem;
            color: #717680;
          `}
        >
          {post.date}
        </time>
        <h3
          css={css`
            font-size: 1.5rem;
            margin-bottom: 4px;
          `}
        >
          {post.title}
        </h3>
        {/* <p
          css={css`
            margin-bottom: 0;
            line-height: 1;
            font-size: 1rem;
            color: #717680;
          `}
        >
          {post.excerpt}
        </p> */}
      </article>
    </PostLink>
  );
}

const PostLink = styled(Link)`
  text-decoration: none;
`;

export default PostPreview;
