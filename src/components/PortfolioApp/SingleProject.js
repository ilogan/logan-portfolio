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
          width: 100%;
          margin-top: 24px;
          margin-bottom: 16px;
          @media (min-width: ${bp.md}) {
            margin-top: 60px;
          }
        `}
      >
        <div
          css={css`
            margin-bottom: 12px;
            @media (min-width: ${bp.sm}) {
              display: flex;
            }
          `}
        >
          <ProjectNumber number={number} />
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
            css={css`
              width: 100%;
              border-radius: 8px;
              border: 1px solid #1a202c;
              box-shadow: 12px 12px #1a202c;
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
  );
}

export default SingleProject;
