import React from "react";
import { css } from "@emotion/core";
import { contentWidth, bp } from "../../utils/styleUtils";
import HeartIcon from "../../../assets/laptop-with-heart.svg";
import { ButtonLink } from "../Button";
import ResumePDF from "./assets/Ian_Logan_Resume.pdf";

function HeroSection() {
  return (
    <section
      css={css`
        padding-top: 144px;
        padding-bottom: 112px;
      `}
    >
      <div
        css={[
          contentWidth,
          css`
            text-align: center;
          `
        ]}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
          `}
        >
          <div>
            <HeartIcon
              css={css`
                fill: #1a202c;
                padding-right: 16px;
                width: 55px;
                @media (min-width: ${bp.sm}) {
                  width: 70px;
                }
                @media (min-width: ${bp.md}) {
                  width: 80px;
                }
              `}
            />
          </div>
          <h1
            css={css`
              font-size: 3rem;
              @media (min-width: ${bp.sm}) {
                font-size: 4rem;
              }
              @media (min-width: ${bp.md}) {
                font-size: 5rem;
              }
            `}
          >
            Ian Logan
          </h1>
        </div>
        <div
          css={css`
            margin-bottom: 48px;
          `}
        >
          <p>
            Hey! I’m a{" "}
            <span
              css={css`
                color: #0061b5;
              `}
            >
              full-stack software engineer
            </span>
            . I’m passionate about programming, creating apps, and helping
            others do the same. That’s why I’ve decided to learn in public and
            keep a digital journal of my code.
          </p>
        </div>
        <ButtonLink href={ResumePDF}>Here's my Resumé</ButtonLink>
      </div>
    </section>
  );
}

export default HeroSection;
