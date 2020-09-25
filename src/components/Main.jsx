import {
  accent1,
  accent2,
  base,
  h1Size,
  h2Size,
  h3Size,
  lightBase,
  mqLarge,
  mqMedium,
} from "../Style";

import { Contacts } from "./Contacts";
import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { Work } from "./Work";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  flex-grow: 1;
  display: inline-block;
  font-size: ${h3Size};
  color: ${(props) => (props.theme === "light" ? `${accent2}` : `${accent1}`)};
  @media ${mqMedium} {
    font-size: ${h2Size};
  }
  @media ${mqLarge} {
    font-size: ${h1Size};
  }
`;

const P = styled.p`
  color: ${(props) => (props.theme === "light" ? `${base}` : `${lightBase}`)};
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Main = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <React.Fragment>
        <H1 theme={theme}>about</H1>
        <P theme={theme}>
          Over the years I have worked with different languages, application
          stacks, design systems, project management techniques, JavaScript
          frameworks, CSS processors and most importantly people. Involvement in
          community and critically thinking of ways to improve how we work with
          one another is just as important to me as writing code. Our
          understanding of ourselves affects our products and how we make them.
          Inclusion of all personas and the practice of empathy leads the way to
          making better products and a better world.
        </P>
        <H1 style={{ marginTop: "1rem" }} theme={theme}>
          work
        </H1>
        <Work />
        <H1 theme={theme}>contact</H1>
        <Contacts />
      </React.Fragment>
    )}
  </ThemeConsumer>
);
