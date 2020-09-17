import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { contentWidth, UnorderedList } from "../utils/styleUtils";
import { Link } from "gatsby";
import GithubSVG from "../../assets/github.svg";
import LinkedInSVG from "../../assets/linkedin-plain.svg";
import EnvelopeSVG from "../../assets/envelope.svg";

function Footer() {
  return (
    <footer
      css={css`
        padding: 48px 0 16px 0;
        background-color: #1a202c;
      `}
    >
      <div css={contentWidth}>
        <nav
          css={css`
            margin-bottom: 24px;
          `}
        >
          <UnorderedList>
            <li>
              <InternalLink to="/">home</InternalLink>
            </li>
            <li>
              <InternalLink to="/portfolio">portfolio</InternalLink>
            </li>
            <li>
              <InternalLink to="/about">about</InternalLink>
            </li>
          </UnorderedList>
        </nav>
        <div
          css={css`
            text-align: center;
            margin-bottom: 48px;
          `}
        >
          <UnorderedList>
            <li>
              <ExternalLink href="https://www.github.com/ilogan" icon>
                <GithubSVG width="24px" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/itlogan/" icon>
                <LinkedInSVG width="24px" />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="mailto:itlogan9@gmail.com" icon>
                <EnvelopeSVG width="24px" />
              </ExternalLink>
            </li>
          </UnorderedList>
        </div>
        <div>
          <small
            css={css`
              text-align: center;
              color: rgba(255, 255, 255, 0.8);
            `}
          >
            If you see any typos or errors on my site, it’s not my fault.
            Regardless, feel free to make a{" "}
            <ExternalLink href="https://github.com/ilogan/logan-portfolio/pulls">
              PR
            </ExternalLink>{" "}
            alerting me to the mistake (and then I’ll find the scoundrel
            responsible).
          </small>
        </div>
      </div>
    </footer>
  );
}

const InternalLink = styled(Link)`
  color: #ffffffaa;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

// external link related
function ExternalLink({ children, href, icon }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      css={icon ? linkIconCSS : linkTextCSS}
    >
      {children}
    </a>
  );
}

const linkIconCSS = css`
  fill: #ffffffaa;
  &:hover {
    fill: #ffffff;
  }
`;

const linkTextCSS = css`
  color: #fff250;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
