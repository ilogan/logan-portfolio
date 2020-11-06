import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { bp } from "../../utils/styleUtils";
import { Link } from "gatsby";
import useTags from "../../hooks/useTags";

import Tag from "../Tag";

function PostPreview({ post }) {
  const tagInfo = useTags();
  return (
    <article
      css={css`
        position: relative;
        border-radius: 4px;
        margin-bottom: 32px;
        @media (min-width: ${bp.lg}) {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
        }
      `}
    >
      <PostLink to={post.slug}>
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
            padding: -10px;
            color: #1a202c;
            font-size: 1.25rem;
            margin-bottom: 0px;
          `}
        >
          {post.title}
        </h3>
      </PostLink>
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
    </article>
  );
}

const PostLink = styled(Link)`
  display: block;
  width: fit-content;
  margin-bottom: 12px;
  text-decoration: none;
  border-bottom: 2px solid #e2e2e2;
  &:hover {
    h3 {
      color: #004784;
    }
  }
  @media (min-width: ${bp.lg}) {
    margin-bottom: 6px;
  }
`;

export default PostPreview;
