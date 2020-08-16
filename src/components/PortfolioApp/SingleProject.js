import React from "react";
import { css } from "@emotion/core";
import { contentWidth, flex } from "../../utils/styleUtils";
import LinkIcon from "../../../assets/link.svg";
import Tag from "../Tag";
import GithubButton from "./GithubButton";

function SingleProject({ project }) {
  console.log(project);
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
              <h1>{project.title}</h1>
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
                {project.siteUrl}
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
              {project.tags.data.map(t => (
                <li key={t._id}>
                  <Tag
                    color={t.type.color}
                    backgroundColor={t.type.backgroundColor}
                  >
                    {t.name}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        css={css`
          background-color: #cbcbcb;
          height: 400px;
        `}
      ></div>
      <div
        css={[
          contentWidth,
          flex,
          css`
            margin-top: -350px;
          `
        ]}
      >
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
              display: flex;
              margin-bottom: 64px;
            `}
          >
            <img
              alt="project"
              src="https://picsum.photos/1000/600"
              css={css`
                width: 100%;
                border-radius: 8px;
                border: 8px solid #1a202c;
              `}
            />
          </div>
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <h2>Overview</h2>
            <p>{project.summary}</p>
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
              {project.technicalFeatures.map(f => (
                <li key={f.text}>{f.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <div
              css={css`
                margin-bottom: 2rem;
              `}
            >
              <h2>Personal Responsibilities</h2>
              <ul
                css={css`
                  > li {
                    margin-bottom: 0.5rem;
                  }
                `}
              >
                {project.responsibilities.map(r => (
                  <li key={r.text}>{r.text}</li>
                ))}
              </ul>
            </div>
            <div
              css={css`
                display: inline-block;
                text-align: center;
                margin-bottom: 2rem;
              `}
            >
              <div
                css={css`
                  margin-bottom: 0.5rem;
                `}
              >
                check out the code on
              </div>
              <GithubButton url={project.githubUrl}>GitHub</GithubButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProject;
