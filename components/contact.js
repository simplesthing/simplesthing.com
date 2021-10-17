import {
    accent1,
    accent2,
    nuetral,
    lightBase,
    marginBase,
    mqSmall
} from "./styles/index";
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
  border: 2px solid ${lightBase};
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
    color: ${accent1};
    background: ${nuetral};
  }
`;

const Contact = () => (
    <ContactList>
        <li>
            <SocialLink
                href="//github.com/simplesthing"
                title="find me on github"
                aria-label="find me on github"
            >
                <i className="fab fa-github"></i>
            </SocialLink>
        </li>
        <li>
            <SocialLink
                href="//www.linkedin.com/in/simplesthing"
                title="find me on linkedIn"
                aria-label="find me on linkedIn"
            >
                <i className="fab fa-linkedin-in"></i>
            </SocialLink>
        </li>
        <li>
            <SocialLink
                href="//twitter.com/simplesthing"
                title="find me on twitter"
                aria-label="find me on twitter"
            >
                <i className="fab fa-twitter"></i>
            </SocialLink>
        </li>
    </ContactList>
);

export default Contact;