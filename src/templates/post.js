import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { contentWidth, textWidth } from "../utils/styleUtils";

import GlobalLayout from "../components/layouts/GlobalLayout";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

function PostTemplate({ data: { mdx: post } }) {
  console.log(post);
  return (
    <GlobalLayout>
      <section
        css={css`
          ${contentWidth}
          ${textWidth}
          margin-top: 64px;
          margin-bottom: 64px;
        `}
      >
        <article>
          <h1
            css={css`
              font-size: 3rem;
            `}
          >
            {post.frontmatter.title}
          </h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Link to="/blog/">&larr; Back</Link>
        </article>
      </section>
    </GlobalLayout>
  );
}

export default PostTemplate;
