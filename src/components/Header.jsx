import React, { Fragment } from 'react';
import styled from 'styled-components'
import { logoFontFamily, mqMedium, mqXlarge } from '../Style'

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
  @media ${mqXlarge} {
    font-size: 8vw;
  }
`

export const Header = () => {
  return (
    <H1>simplesthing</H1>
  )
}


