import React from "react";
import { ThemeConsumer } from "../contexts/theme";
import { mqSmall } from "../Style";
import styled from "styled-components";

const Wrapper = styled.header`
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

    *:focus {
      outline-color: red;
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
          role="img"
          aria-label="3D model viewer web component with the word simplesthing written in script with a fox, flowers and butterfly painted in Tiltbrush VR painting application"
          camera-orbit="160deg 90deg 5%"
        ></model-viewer>
      </Wrapper>
    )}
  </ThemeConsumer>
);
