import styled from 'styled-components'
import { base, step1 } from '../Style'

/*  checkerboard 
 background: conic-gradient(#fff 0.25turn, #000 0.25turn 0.5turn, #fff 0.5turn 0.75turn, #000 0.75turn) top left / 25% 25% repeat;

 stars
   background: 
  linear-gradient(324deg, #232927 4%,   transparent 4%) -70px 43px,
  linear-gradient( 36deg, #232927 4%,   transparent 4%) 30px 43px,
  linear-gradient( 72deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,
  linear-gradient(288deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,
  linear-gradient(216deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,
  linear-gradient(144deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px;
  background-color: ${base};
  background-size: 100px 100px;
*/

export const CircusGradient = styled.div`
width: 100%;
height: 100%;
min-width: 100vw;
min-height: 100vh;
background-attachment fixed;
background: conic-gradient(
  ${base} 0.05turn, 
  ${step1} 0.015turn 0.10turn,
  ${base} 0.10turn 0.15turn,
  ${step1} 0.15turn 0.20turn,
  ${base} 0.20turn 0.25turn,
  ${step1} 0.25turn 0.30turn,
  ${base} 0.30turn 0.35turn,
  ${step1} 0.35turn 0.40turn,
  ${base} 0.40turn 0.45turn,
  ${step1} 0.45turn 0.50turn,
  ${base} 0.50turn 0.55turn,
  ${step1} 0.55turn 0.60turn,
  ${base} 0.60turn 0.65turn,
  ${step1} 0.65turn 0.70turn,
  ${base} 0.70turn 0.75turn,
  ${step1} 0.75turn 0.80turn,
  ${base} 0.80turn 0.85turn,
  ${step1} 0.85turn 0.90turn,
  ${base} 0.90turn 0.95turn,
  ${step1} 0.95turn 1.0turn
  );
`