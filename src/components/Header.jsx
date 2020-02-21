import React, { Fragment } from 'react';
import styled from 'styled-components'
import { h3Size, logoFontFamily } from '../Style'

const H1 = styled.header`
  font-family: ${logoFontFamily};
  font-size: 10vw;
  letter-spacing: 1vw;
  color: #fff;
  text-align: center;
  margin: 2% 2% 0;
`

export const Header = () => {
  return (
    <H1>simplesthing</H1>
  )
}


