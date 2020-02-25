import React, { Fragment } from 'react';
import styled from 'styled-components'
import { logoFontFamily, mqMedium, mqXlarge, mqSmall, mqXsmall } from '../Style'

const H1 = styled.header`
  text-align: center;
  margin-top: 10%;
  h1 {
    font-family: ${logoFontFamily};
    font-size: 13vw;
    letter-spacing: 1vw;
    color: #fff;
    margin: 0;

    @media ${mqMedium} {
      font-size: 10vw;
    }
    @media ${mqXlarge} {
      font-size: 9vw;
    }
  }

  @media ${mqXsmall} {
    margin-top: 5%;
  }

  @media ${mqSmall} {
    margin-top: 2%;
  }
 
`

export const Header = () => {
  return (
    <H1><h1>simplesthing</h1></H1>
  )
}


