import {
  Layout,
  accent1,
  accent2,
  base,
  h1Size,
  h2Size,
  h3Size,
  lightBase,
  mqLarge,
  mqMedium,
  mqSmall,
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

const H2 = styled.h2`
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
  margin-left: 4%;
  margin-right: 4%;
  @media ${mqMedium} {
    margin: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Main = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Layout>
        <h1 className="sr-only">
          Personal website for web developer Ava Collins
        </h1>
        <section>
          <H2 theme={theme}>about</H2>
          <P theme={theme}>
            Over the years I have worked with different languages, application
            stacks, design systems, project management techniques, JavaScript
            frameworks, CSS processors and most importantly people. Involvement
            in community and critically thinking of ways to improve how we work
            with one another is just as important to me as writing code. Our
            understanding of ourselves affects our products and how we make
            them. When we make an effort to consciously include all personas and
            to practice empathy we lead the way to making better products,
            workplaces and a better world for all.
          </P>
        </section>
        <section>
          <H2 style={{ marginTop: "1rem" }} theme={theme}>
            work
          </H2>
          <Work />
        </section>
        <section>
          <H2 theme={theme}>contact</H2>
          <Contacts />
        </section>
      </Layout>
    )}
  </ThemeConsumer>
);
