import React from "react";
import { css } from "@emotion/core";

import LinkIcon from "../../../../assets/link.svg";

function SingleProject() {
  return (
    <div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <time datetime="2020-5-20">May 2020</time>
      </div>
      <div
        css={css`
          border-bottom: 10px solid #ffd845;
          padding-bottom: 0.25rem;
          margin-bottom: 1rem;
        `}
      >
        <h1>Ultimate Werewolf</h1>
        <a
          css={css`
            display: flex;
            align-items: center;
            font-size: 1.5rem;
            font-weight: medium;
            text-decoration: none;
          `}
          href="http://social-deduction-app.web.app"
        >
          <LinkIcon
            height="1.5rem"
            css={css`
              padding-right: 0.5rem;
            `}
          />
          http://social-deduction-app.web.app
        </a>
      </div>
      <ul
        css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          list-style-type: none;
          margin-bottom: 3rem;
          > li {
            font-size: .875rem;
            font-weight: bold;
            padding: .25rem;
          }
        `}
      >
        <li>#react.js</li>
        <li>#hooks</li>
        <li>#context</li>
        <li>#react-router</li>
        <li>#styled-components</li>
        <li>#firebase-realtime-database</li>
      </ul>
      <img
        alt="project"
        src="https://picsum.photos/1000/600"
        css={css`
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
          margin-bottom: 2.5rem;
        `}
      />
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        libero lectus, tempus a consectetur at, finibus eget lacus. Pellentesque
        nec nulla quis est lacinia congue eget ac nisi. Cras vel sapien
        pharetra, lacinia velit et, imperdiet odio. Ut molestie placerat quam eu
        venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
        ullamcorper erat id justo sollicitudin pharetra ac nec quam. Aliquam eu
        leo sed enim auctor fermentum. Quisque feugiat elit ut mauris molestie
        lobortis. Phasellus in sem ut eros pulvinar efficitur. Suspendisse
        potenti. Integer lacus nisi, gravida eu est et, scelerisque rhoncus
        risus.
      </p>
      <h2>Technical Features</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <h2>Personal Responsibilities</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
      <div>
        <div>Checkout the code on</div>
        <button>GitHub</button>
      </div>
    </div>
  );
}

export default SingleProject;
