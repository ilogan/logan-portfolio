import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { contentWidth, flex } from "../../utils/styleUtils";
import LinkIcon from "../../../assets/link.svg";
import Tag from "../Tag";
import GithubButton from "./GithubButton";

function SingleProject() {
  return (
    <section>
      <div
        css={css`
          background-color: #ffffff;
          padding-top: 80px;
          padding-bottom: 24px;
        `}
      >
        <div css={[contentWidth, flex]}>
          <aside
            css={css`
              min-width: 7.25rem;
              margin-right: 5rem;
              text-align: right;
            `}
          >
            {/* <Link to="/portfolio/2">Project 2</Link> */}
          </aside>
          <div
            css={css`
              width: 100%;
            `}
          >
            <div
              css={css`
                text-align: right;
                margin-bottom: 0.5rem;
                color: #1a202c;
                font-size: 1rem;
              `}
            >
              <time dateTime="2020-5-20">May 2020</time>
            </div>
            <div
              css={css`
                padding-bottom: 12px;
                margin-bottom: 18px;
                border-bottom: 8px solid #a2a2a2;
              `}
            >
              <h1>Ultimate Werewolf</h1>
              <a
                css={css`
                  display: flex;
                  align-items: center;
                  width: fit-content;
                  font-size: 1.125rem;
                  color: #1a202c;
                  text-decoration: none;
                `}
                href="http://social-deduction-app.web.app"
              >
                <LinkIcon
                  height="1rem"
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
                  font-size: 0.8125rem;
                  margin-right: 1rem;
                  margin-bottom: 0.25rem;
                  &:last-child {
                    margin-right: 0;
                  }
                }
              `}
            >
              <li>
                <Tag color="teal">react.js</Tag>
              </li>
              <li>
                <Tag color="teal">hooks</Tag>
              </li>
              <li>
                <Tag color="teal">context</Tag>
              </li>
              <li>
                <Tag color="teal">react-router</Tag>
              </li>
              <li>
                <Tag color="pink">styled-components</Tag>
              </li>
              <li>
                <Tag color="orange">firebase-realtime-database</Tag>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        css={css`
          border-bottom: 5px solid #f6e05e;
          border-top: 5px solid #f6e05e;
          background-color: #fefcbf;
          background-image: url(./skulls.svg);
          height: 400px;
        `}
      ></div>
      <div css={[contentWidth, flex]}>
        <aside
          css={css`
            min-width: 7.25rem;
            margin-right: 5rem;
            text-align: right;
          `}
        >
          {/* <Link to="/portfolio/2">Project 2</Link> */}
        </aside>
        <div
          css={css`
            width: 100%;
            position: relative;
            top: -350px;
          `}
        >
          <div
            css={css`
              display: flex;
              background-color: white;
              border: 1px solid #1a202c;
              border-radius: 4px;
              padding: 5px;
              margin-bottom: 64px;
              box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.15);
            `}
          >
            <img
              alt="project"
              src="https://picsum.photos/1000/600"
              css={css`
                width: 100%;
                border-radius: 3px;
                border: 1px solid #1a202c;
              `}
            />
          </div>
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              libero lectus, tempus a consectetur at, finibus eget lacus.
              Pellentesque nec nulla quis est lacinia congue eget ac nisi. Cras
              vel sapien pharetra, lacinia velit et, imperdiet odio. Ut molestie
              placerat quam eu venenatis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nam ullamcorper erat id justo
              sollicitudin pharetra ac nec quam. Aliquam eu leo sed enim auctor
              fermentum. Quisque feugiat elit ut mauris molestie lobortis.
              Phasellus in sem ut eros pulvinar efficitur. Suspendisse potenti.
              Integer lacus nisi, gravida eu est et, scelerisque rhoncus risus.
            </p>
          </div>
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <h2>Technical Features</h2>
            <ul
              css={css`
                > li {
                  margin-bottom: 0.5rem;
                }
              `}
            >
              <li>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </li>
              <li>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </li>
              <li>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
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
                <ul
                  css={css`
                    > li {
                      margin-bottom: 0.5rem;
                    }
                  `}
                >
                  <li>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </li>
                  <li>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </li>
                  <li>
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
      </div>
    </section>
  );
}

export default SingleProject;
