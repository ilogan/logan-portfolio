import React from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { contentWidth, flex } from "../../utils/styleUtils";
import LinkIcon from "../../../assets/link.svg";
import Tag from "../Tag";
import GithubButton from "./GithubButton";

function SingleProject({ project, banner }) {
  console.log(project);
  return (
    <section>
      <div
        css={css`
          background-color: #ffffff;
          padding-top: 80px;
          padding-bottom: 200px;
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
            <div
              css={css`
                position: fixed;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                transform: translate(-55px, 30px);
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  height: 75px;
                  width: 75px;

                  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
                  border: 6px solid #ffffff;
                  border-radius: 50%;
                  background-color: #e7e7e7;
                  color: #1a202c;

                  font-size: 2.25rem;
                  font-weight: 800;

                  margin-bottom: 32px;
                `}
              >
                1
              </div>
              <div
                css={css`
                  font-weight: 600;
                  > div {
                    margin-bottom: 0.5rem;
                    &:last-child {
                      margin-right: 0;
                    }
                  }
                `}
              >
                <div css={css`
                  background-color: #1a202c;
                  color: white;
                  padding: .25rem .25rem;
                `}>Ultimate Werewolf</div>
                <div>Office</div>
              </div>
            </div>
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
              <time dateTime="2020-5-20">{project.date}</time>
            </div>
            <div
              css={css`
                padding-bottom: 12px;
                /* border-bottom: 8px solid #a2a2a2; */
              `}
            >
              <h1
                css={css`
                  font-size: 4.5rem;
                  margin-bottom: 0.75rem;
                `}
              >
                {project.title}
              </h1>
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
          </div>
        </div>
      </div>
      {/* <div
        css={css`
          background-color: #cbcbcb;
          height: 400px;
        `}
      ></div> */}
      <div
        css={[
          contentWidth,
          flex,
          css`
            margin-top: -170px;
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
              margin-bottom: 32px;
            `}
          >
            <Image
              alt="project"
              fluid={project.fluid}
              css={css`
                width: 100%;
                border-radius: 8px;
                border: 8px solid #ffffff;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
              `}
            />
          </div>
          <div
            css={css`
              margin-bottom: 4rem;
            `}
          >
            <ul
              css={css`
                display: flex;
                justify-content: center;
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
                margin-bottom: 10rem;
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
