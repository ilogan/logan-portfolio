import React from "react";
import { css } from "@emotion/core";
import { contentWidth } from "../../utils/styleUtils";

export function About() {
  return (
    <section
      css={css`
        padding-bottom: 120px;
      `}
    >
      <div css={contentWidth}>
        <h2
          css={[
            textWidth,
            css`
              font-size: 2rem;
              padding-top: 32px;
              margin-top: 64px;
              margin-bottom: 16px;
            `
          ]}
        >
          Hi! I'm Ian.
        </h2>
        <div
          css={[
            textWidth,
            css`
              > p {
                margin-bottom: 25px;
              }
            `
          ]}
        >
          <p>
            I'm a software engineer with experience programming using many
            different technologies. Some of my accomplishments these past few
            years include:
          </p>
          <p>
            <ul>
              <li>
                building neural networks with TensorFlow (RNNs, CNNs, GANs)
              </li>
              <li>controlling simulated robots in Gazebo with Python</li>
              <li>
                and creating full-stack Javascript applications with React and
                Node
              </li>
            </ul>
          </p>
          <p>
            In each of the above instances, I've been excited to learn something
            new &mdash; excited to be challenged. Most important of all, I've
            been confident I would find success.
          </p>
          <p>
            I haven't always felt this way, though. I started coding eight years
            ago. Before the neural networks, the robots, and the web apps, I
            wrote Hello World. I struggled.{" "}
            <span css={italic}>I was afraid of FizzBuzz.</span> I even stopped
            coding for some time.
          </p>
          <p>I've decided it's time to start documenting my coding journey.</p>
          <p>
            This site is my effort to solidify the present while I make up for
            lost history. It is my outlet to share my successes and failures
            with others.
          </p>
          <p>
            My main wish is that by learning in public, I can create some
            meaningful content that resonates with someone out there. I'm
            passionate about solving problems with code; hopefully, you leave my
            site inspired to do the same.
          </p>
        </div>
      </div>
    </section>
  );
}

const textWidth = css`
  max-width: 730px;
  margin: 0 auto;
`;

const italic = css`
  font-style: italic;
`;
