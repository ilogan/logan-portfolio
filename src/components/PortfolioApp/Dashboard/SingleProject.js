import React from "react";
import { css } from "@emotion/core";

function SingleProject() {
  return (
    <div>
      <div>
        <time datetime="2020-5-20">May 2020</time>
        <h1>Ultimate Werewolf</h1>
        <a href="http://social-deduction-app.web.app">
          http://social-deduction-app.web.app
        </a>
      </div>
      <ul
        css={css`
          display: flex;
          list-style-type: none;
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
