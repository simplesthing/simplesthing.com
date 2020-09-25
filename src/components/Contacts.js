import {
  accent1,
  accent2,
  base,
  lightBase,
  marginBase,
  mqSmall,
} from "../Style";

import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import styled from "styled-components";

const ContactList = styled.ul`
  display: block;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  padding-bottom: ${marginBase};
  margin-left: 4%;
  li {
    display: inline-block;
    margin-right: 4%;
  }

  @media ${mqSmall} {
    margin-left: 0;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
  color: ${accent2}!important;
  border: ${(props) =>
    props.theme === "light" ? `2px solid ${base}` : `2px solid ${lightBase}`};
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
  margin-top: 15px;
  font-size: 20px;
  background: 0 0;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    border: ${(props) =>
      props.theme === "light" ? `2px solid ${base}` : `2px solid ${lightBase}`};
    color: ${accent1};
    background: ${(props) =>
      props.theme === "light" ? `${base}` : `${lightBase}`};
  }
`;

export const Contacts = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <ContactList>
        <li>
          <SocialLink
            href="//github.com/simplesthing"
            title="find me on github"
            theme={theme}
          >
            <i className="fab fa-github"></i>
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="//www.linkedin.com/in/simplesthing"
            title="find me on linkedIn"
            theme={theme}
          >
            <i className="fab fa-linkedin-in"></i>
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="//twitter.com/simplesthing"
            title="find me on twitter"
            theme={theme}
          >
            <i className="fab fa-twitter"></i>
          </SocialLink>
        </li>
      </ContactList>
    )}
  </ThemeConsumer>
);
