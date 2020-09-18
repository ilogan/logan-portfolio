import React, { useRef, useEffect } from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { flex, bp } from "../../utils/styleUtils";
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
          width: 100vw;
          height: 300px;
          z-index: -1;
          left: 0;
          @media (min-width: ${bp.md}) {
            height: 364px;
          }
        `}
      ></div>
      <div
        css={css`
          padding-top: 24px;
          padding-bottom: 182px;
          @media (min-width: ${bp.md}) {
            padding-top: 60px;
          }
        `}
      >
        <div css={[flex]}>
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
                css={css`
                  margin-bottom: 0.75rem;
                  @media (min-width: ${bp.sm}) {
                    display: flex;
                  }
                `}
              >
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background-color: #ffffff;
                    border: 4px solid #1a202c;
                    border-radius: 50%;
                    color: #1a202c;

                    height: 40px;
                    min-width: 40px;
                    width: 40px;
                    margin: 0 auto;
                    margin-bottom: 16px;

                    font-weight: 800;
                    font-size: 1.25rem;

                    @media (min-width: ${bp.sm}) {
                      margin-right: 16px;
                      margin-bottom: 0;
                      margin-left: 0;
                      height: 55px;
                      min-width: 55px;
                      width: 55px;

                      font-size: 2rem;
                    }

                    @media (min-width: ${bp.md}) {
                      transform: translateY(5px);
                      margin-right: 16px;
                      height: 60px;
                      min-width: 60px;
                      width: 60px;
                    }
                  `}
                >
                  {number}
                </div>
                <h2
                  css={css`
                    text-align: center;
                    @media (min-width: ${bp.sm}) {
                      text-align: left;
                    }
                  `}
                >
                  {project.title}
                </h2>
              </div>
              {!project.siteUrl ? null : (
                <a
                  css={css`
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    font-size: 0.825rem;
                    color: #343c4a;
                    text-decoration: none;
                    margin: 0 auto;

                    @media (min-width: ${bp.sm}) {
                      margin: 0;
                      transform: translateX(75px);
                      font-size: 1rem;
                    }
                    @media (min-width: ${bp.md}) {
                      transform: translateX(96px);
                      font-size: 1.125rem;
                    }
                  `}
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon
                    height="1rem"
                    css={css`
                      fill: #343c4a;
                      padding-right: 0.5rem;
                    `}
                  />
                  {project.siteUrl}
                </a>
              )}
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
                border: 1px solid #1a202c;
                box-shadow: 12px 12px #1a202c;
                /* @media (min-width: ${bp.sm}) {
                  border-width: 8px;
                } */
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
            <h3>Overview</h3>
            <p>{project.summary}</p>
          </div>
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <h3>Observations</h3>
            {project.responsibilities.map(r => (
              <p key={r.text}>{r.text}</p>
            ))}
          </div>
          <div
            css={css`
              margin-bottom: 2rem;
            `}
          >
            <h3>Technical Features</h3>
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
