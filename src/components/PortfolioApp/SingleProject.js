import React, { useRef, useEffect } from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { contentWidth, flex } from "../../utils/styleUtils";
import LinkIcon from "../../../assets/link.svg";
import Tag from "../Tag";
import GithubButton from "./GithubButton";

function SingleProject({ project, number, setSection }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = sectionRef.current.getBoundingClientRect();
      if (position.top <= 1 && position.bottom >= -1) {
        setSection(project.title);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [project.title, setSection]);

  return (
    <section id={project.title} ref={sectionRef}>
      <div
        css={css`
          position: absolute;
          background-color: white;
          width: 100vw;
          height: 30rem;
          z-index: -1;
          left: 0;
        `}
      ></div>
      <div
        css={css`
          /* background-color: #ffffff; */
          padding-top: 80px;
          padding-bottom: 200px;
        `}
      >
        <div css={[contentWidth, flex]}>
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
            ></div>
            <div
              css={css`
                padding-bottom: 12px;
                /* border-bottom: 8px solid #a2a2a2; */
              `}
            >
              <div
                css={[
                  flex,
                  css`
                    margin-bottom: 0.75rem;
                  `
                ]}
              >
                <div
                  css={css`
                    transform: translateY(5px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 1rem;

                    height: 70px;
                    min-width: 70px;
                    width: 40px;

                    border: 4px solid #1a202c;
                    border-radius: 50%;
                    background-color: #baebff;
                    color: #1a202c;

                    font-size: 2.5rem;
                    font-weight: 800;
                    /* box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05); */
                  `}
                >
                  {number}
                </div>
                <h1
                  css={css`
                    font-size: 4.5rem;
                  `}
                >
                  {project.title}
                </h1>
              </div>
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
        {/* <aside
          css={css`
            min-width: 7.25rem;
            margin-right: 5rem;
            text-align: right;
          `}
        >
        </aside> */}
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
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
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
