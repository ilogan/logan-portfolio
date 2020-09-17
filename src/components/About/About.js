import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

export function About() {
  return (
    <section
      css={css`
        padding-bottom: 64px;
      `}
    >
      <div css={contentWidth}>
        <h2
          css={[
            textPadding,
            css`
              font-size: 2rem;
              padding-top: 32px;
              margin-top: 32px;
              margin-bottom: 16px;
            `
          ]}
        >
          Hi! I'm Ian.
        </h2>
        <div
          css={[
            textPadding,
            css`
              > p {
                margin-bottom: 16px;
              }
            `
          ]}
        >
          <p>
            I started programming 8 years ago. Here are just a few of the
            technologies I've experimented with in that time:
          </p>
          <p>
            <ul>
              <li>
                I've built neural networks with TensorFlow (RNNs, CNNs, GANs)
              </li>
              <li>
                I've controlled simulated robots in a Gazebo environment with
                Python
              </li>
              <li>
                I've created fullstack Javascript applications with React and
                Node
              </li>
            </ul>
          </p>
          <p>
            In each of these instances I've been excited to learn something new.
            I've been excited to be challenged. I've been confident to find
            success.
          </p>
          <p>
            It hasn't always been this way. Before the neural networks and apps,
            I wrote Hello World. I struggled and felt imposter syndrome.{" "}
            <span
              css={css`
                font-style: italic;
              `}
            >
              I was afraid of FizzBuzz.
            </span>{" "}
            I even stopped coding for a period of time.
          </p>
          <p>
            This site serves as a way for me to share my successes and failures
            with others. It is an effort to solidify and document the present
            while I make up for 8 years of lost and diluted history. Most
            importantly, I wish to share my excitement for programming and
            inspire others to be active in their pursuit for knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}

const textPadding = css`
  padding: 0 130px;
`;
