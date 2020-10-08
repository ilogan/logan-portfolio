import React from "react";
import { css } from "@emotion/core";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { contentWidth, textWidth } from "../utils/styleUtils";

import GlobalLayout from "../components/layouts/GlobalLayout";
import useTags from "../hooks/useTags";
import Tag from "../components/Tag";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        tags
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;

function PostTemplate({ data: { mdx: post } }) {
  const tagInfo = useTags();
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
          <time
            css={css`
              font-size: 1rem;
            `}
          >
            {post.frontmatter.date}
          </time>
          <h1
            css={css`
              margin-bottom: 8px;
              font-size: 3rem;
            `}
          >
            {post.frontmatter.title}
          </h1>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 1.5rem;
              list-style: none;
              padding-left: 0;
              > li {
                font-size: 0.8125rem;
                margin-right: 12px;
                margin-bottom: 4px;
                &:last-child {
                  margin-right: 0;
                }
              }
            `}
          >
            {post.frontmatter.tags.map(tName => {
              return (
                <li key={`${post.frontmatter.title}-${tName}`}>
                  <Tag
                    color={tagInfo[tName].color}
                    backgroundColor={tagInfo[tName].backgroundColor}
                  >
                    {tName}
                  </Tag>
                </li>
              );
            })}
          </ul>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Link
            css={css`
              color: #0061b5;
            `}
            to="/blog/"
          >
            &larr; Back
          </Link>
        </article>
      </section>
    </GlobalLayout>
  );
}

export default PostTemplate;
