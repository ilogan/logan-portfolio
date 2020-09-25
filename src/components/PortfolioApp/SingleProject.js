import React, { useRef, useEffect } from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { bp } from "../../utils/styleUtils";
import LinkIcon from "../../../assets/link.svg";
import Tag from "../Tag";
import { ButtonLink } from "../Button";

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
          left: 0;
          width: 100vw;
          height: 180px;
          z-index: -1;
          background-color: white;
          @media (min-width: ${bp.sm}) {
            position: static;
            width: 0;
            height: 36px;
          }
        `}
      ></div>
      <div
        css={css`
          width: 100%;
          margin-bottom: 12px;
          margin-top: 60px;
          padding: 12px 8px 12px;
          background: #ffffff;
          @media (min-width: ${bp.sm}) {
            ${projectBorderCSS}
            border-radius: 8px 8px 0 0;
            box-shadow: 12px 32px;
            padding: 12px 34px 18px;
          }
          @media (min-width: ${bp.md}) {
            margin-top: 60px;
          }
        `}
      >
        <div
          css={css`
            margin-bottom: 12px;
            @media (min-width: ${bp.sm}) {
              /* display: flex; */
            }
          `}
        >
          <div
            css={css`
              width: fit-content;
              margin: 0 auto;
              margin-top: -33px;
              margin-bottom: 16px;
              @media (min-width: ${bp.sm}) {
                margin-top: -45px;
              }
            `}
          >
            <ProjectNumber number={number} />
          </div>
          <h2
            css={css`
              font-size: 1.5rem;
              line-height: 1;
              text-align: center;
              @media (min-width: ${bp.sm}) {
                font-size: 2rem;
              }
              @media (min-width: ${bp.md}) {
                font-size: 3rem;
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
              font-size: 0.75rem;
              color: #343c4a;
              text-decoration: none;
              margin: 0 auto;

              @media (min-width: ${bp.sm}) {
                /* margin: 0; */
                /* transform: translateX(75px); */
                font-size: 1rem;
              }
              @media (min-width: ${bp.md}) {
                /* transform: translateX(96px); */
                font-size: 1.125rem;
              }
            `}
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon
              css={css`
                height: 0.75rem;
                fill: #343c4a;
                padding-right: 4px;
                @media (min-width: ${bp.sm}) {
                  padding-right: 8px;
                  height: 1rem;
                }
              `}
            />
            {project.siteUrl}
          </a>
        )}
      </div>

      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            margin-bottom: 32px;
          `}
        >
          <Image
            alt="project"
            fluid={project.fluid}
            css={[
              projectBorderCSS,
              css`
                width: 100%;
                border-radius: 8px;
                box-shadow: 12px 12px #1a202c;
                @media (min-width: ${bp.sm}) {
                  border-radius: 0 0 8px 8px;
                }
              `
            ]}
          />
        </div>
        <div
          css={css`
            margin-bottom: 64px;
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
          <h3>My Key Responsibilities</h3>
          <ul
            css={css`
              > li {
                margin-bottom: 0.5rem;
              }
            `}
          >
            {project.responsibilities.map(f => (
              <li key={f.text}>{f.text}</li>
            ))}
          </ul>
        </div>
        <div
          css={css`
            margin-bottom: 2rem;
          `}
        >
          <h3>Reflection</h3>
          {project.technicalFeatures.map(r => (
            <p key={r.text}>{r.text}</p>
          ))}
        </div>
        <div
          css={css`
            padding-bottom: 96px;
          `}
        >
          <ButtonLink href={project.githubUrl} dark>
            check it out on GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function ProjectNumber({ number }) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #fffb5e;
        ${projectBorderCSS}
        border-radius: 50%;
        color: #1a202c;

        height: 40px;
        min-width: 40px;
        width: 40px;

        font-weight: 800;
        font-size: 1.25rem;

        @media (min-width: ${bp.sm}) {
          height: 55px;
          min-width: 55px;
          width: 55px;

          font-size: 2rem;
        }

        @media (min-width: ${bp.md}) {
          height: 60px;
          min-width: 60px;
          width: 60px;
        }
      `}
    >
      {number}
    </div>
  );
}

const projectBorderCSS = css`
  border: 2px solid #1a202c;
  @media (min-width: ${bp.sm}) {
    border: 4px solid #1a202c;
  }
`;

export default SingleProject;
