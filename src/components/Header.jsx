import React, { Fragment } from 'react';
import styled from 'styled-components'
import { h3Size, logoFontFamily, mqMedium } from '../Style'

const H1 = styled.header`
  font-family: ${logoFontFamily};
  font-size: 13vw;
  letter-spacing: 1vw;
  color: #fff;
  text-align: center;
  margin: 2% 2% 0;
  @media ${mqMedium} {
    font-size: 10vw;
  }
`

export const Header = () => {
  return (
    <H1>simplesthing</H1>
  )
}


