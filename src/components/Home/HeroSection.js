import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";
import HeartIcon from "../../../assets/heart.svg";
import { ButtonLink } from "../Button";
import ResumePDF from "./assets/Ian_Logan_Resume.pdf";

function HeroSection() {
  return (
    <section
      css={css`
        padding-top: 144px;
        padding-bottom: 112px;
        background-color: white;
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
          <HeartIcon
            height="64px"
            css={css`
              fill: #f56565;
              padding-right: 16px;
            `}
          />
          <h1
            css={css`
              font-size: 5rem;
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
          <p
            css={css`
              color: #718096;
            `}
          >
            Hey! I’m a{" "}
            <span
              css={css`
                color: #0577da;
              `}
            >
              full stack software engineer
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