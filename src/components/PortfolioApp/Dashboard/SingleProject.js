import React from "react";
import { css } from "@emotion/core";

import LinkIcon from "../../../../assets/link.svg";
import GithubButton from "./GithubButton";

const BackgroundBanner = ({ fill }) => (
  <svg
    css={css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30rem;
      background-color: ${fill};
      z-index: -1;
    `}
  ></svg>
);

const Bullet = ({ fill }) => (
  <svg
    height="20"
    width="20"
    css={css`
      margin-right: 0.5rem;
    `}
  >
    <circle cx="10" cy="10" r="5" fill={fill} />
  </svg>
);

const ulSVGBullet = css`
  padding: 0;
  > li {
    display: flex;
    margin-bottom: 0.5rem;
  }
`;

function SingleProject() {
  return (
    <div
      css={css`
        padding-right: 0.5rem;
      `}
    >
      <BackgroundBanner fill="#ffd845" />
      <div
        css={css`
          text-align: right;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #1a202c;
        `}
      >
        <time datetime="2020-5-20">May 2020</time>
      </div>
      <div
        css={css`
          padding-bottom: 0.25rem;
          margin-bottom: 2rem;
        `}
      >
        <h1>Ultimate Werewolf</h1>
        <a
          css={css`
            display: flex;
            align-items: center;
            width: fit-content;
            font-size: 1.5rem;
            font-weight: medium;
            color: #1a202c;
          `}
          href="http://social-deduction-app.web.app"
        >
          <LinkIcon
            height="1.5rem"
            css={css`
              fill: #1a202c;
              padding-right: 0.5rem;
            `}
          />
          http://social-deduction-app.web.app
        </a>
      </div>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          list-style: none;
          padding-left: 0;
          > li {
            font-size: 0.75rem;
            font-weight: bold;
            color: #1a202c;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 1rem;
            padding: 0.25rem 0.5rem;
            margin-right: 1rem;
            margin-bottom: 0.25rem;
            &:last-child {
              margin-right: 0;
            }
          }
        `}
      >
        <li>react.js</li>
        <li>hooks</li>
        <li>context</li>
        <li>react-router</li>
        <li>styled-components</li>
        <li>firebase-realtime-database</li>
      </ul>
      <img
        alt="project"
        src="https://picsum.photos/1000/600"
        css={css`
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
          margin-bottom: 2.5rem;
        `}
      />
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <h2>Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          libero lectus, tempus a consectetur at, finibus eget lacus.
          Pellentesque nec nulla quis est lacinia congue eget ac nisi. Cras vel
          sapien pharetra, lacinia velit et, imperdiet odio. Ut molestie
          placerat quam eu venenatis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nam ullamcorper erat id justo sollicitudin pharetra
          ac nec quam. Aliquam eu leo sed enim auctor fermentum. Quisque feugiat
          elit ut mauris molestie lobortis. Phasellus in sem ut eros pulvinar
          efficitur. Suspendisse potenti. Integer lacus nisi, gravida eu est et,
          scelerisque rhoncus risus.
        </p>
      </div>
      <div
        css={css`
          margin-bottom: 2rem;
        `}
      >
        <h2>Technical Features</h2>
        <ul css={ulSVGBullet}>
          <li>
            <Bullet fill="#ffd845" />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </li>
          <li>
            <Bullet fill="#ffd845" />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </li>
          <li>
            <Bullet fill="#ffd845" />
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </li>
        </ul>
      </div>
      <div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 2rem;
          `}
        >
          <div>
            <h2>Personal Responsibilities</h2>
            <ul css={ulSVGBullet}>
              <li>
                <Bullet fill="#ffd845" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </li>
              <li>
                <Bullet fill="#ffd845" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </li>
              <li>
                <Bullet fill="#ffd845" />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </li>
            </ul>
          </div>
          <div
            css={css`
              display: inline-block;
              text-align: center;
            `}
          >
            <div>check out the code on</div>
            <GithubButton url="http://github.com">GitHub</GithubButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
