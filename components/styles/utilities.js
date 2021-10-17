import styled from "styled-components";
import Image from "next/image";
import { accent2 } from ".";
export const BorderCircle = styled(Image)`
    border-radius: 9999px;
    border: solid;
    border-width: .25rem;
    border-color: ${accent2};
  `;

  export const DefaultMarginTop = styled.span`
    display: block;
    margin-top: 1rem;
  `;