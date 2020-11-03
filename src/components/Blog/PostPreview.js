import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import useTags from "../../hooks/useTags";

import Tag from "../Tag";

function PostPreview({ post }) {
  const tagInfo = useTags();
  return (
    <PostLink to={post.slug}>
      <article
        css={css`
          position: relative;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
          padding: 12px 0px 0px;
          &:hover > div > h3 {
            border-color: #ababab;
            /* &:before {
              position: absolute;
              top: 0;
              left: -10px;
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-left: 10px solid #303030;
              content: "";
            } */
          }
        `}
      >
        <div
          css={css`
            margin-bottom: 6px;
            margin-right: 12px;
          `}
        >
          <time
            css={css`
              font-size: 0.875rem;
              color: #717680;
            `}
          >
            {post.date}
          </time>
          <h3
            css={css`
              /* position: relative; */
              border-bottom: 2px solid #e2e2e2;
              padding: -10px;
              color: #1a202c;
              font-size: 1.25rem;
              margin-bottom: 0px;
            `}
          >
            {post.title}
          </h3>
        </div>
        <div
          css={css`
            margin-bottom: 6px;
          `}
        >
          <ul
            css={css`
              display: flex;
              list-style: none;
              padding-left: 0;
              > li {
                font-size: 0.8125rem;
                margin-right: 8px;
                margin-bottom: 0px;
                &:last-child {
                  margin-right: 0;
                }
              }
            `}
          >
            {post.tags.map(tName => {
              return (
                <li key={`${post.title}-${tName}`}>
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
        </div>
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
  display: block;
  text-decoration: none;
`;

export default PostPreview;
