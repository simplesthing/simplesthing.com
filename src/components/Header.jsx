import React, { Fragment } from "react";
import {
  logoFontFamily,
  mqMedium,
  mqSmall,
  mqXlarge,
  mqXsmall,
} from "../Style";

import { ThemeConsumer } from "../contexts/theme";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  model-viewer {
    width: 99vw;
    height: 20vh;
    @media ${mqSmall} {
      height: 40vh;
    }
  }
`;

export const Header = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Wrapper>
        <model-viewer
          src="https://simplesthings.s3-us-west-2.amazonaws.com/simples.glb"
          camera-controls
          alt="Simple 3D model viewer with the word simplesthings written in script with a fox, flowers and butterfly painted in Tiltbrush"
          camera-orbit="160deg 90deg 50%"
        ></model-viewer>
      </Wrapper>
    )}
  </ThemeConsumer>
);
