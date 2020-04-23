import React, { Fragment } from 'react';
import styled from 'styled-components'
import { logoFontFamily, mqMedium, mqXlarge, mqSmall, mqXsmall } from '../Style'
import { ThemeConsumer } from '../contexts/theme'

const Head = styled.header`
  text-align: center;
  padding-top: 10%;

  @media ${mqXsmall} {
    padding-top: 5%;
  }

  @media ${mqSmall} {
    padding-top: 2%;
  }
`

const H1 = styled.h1`
font-family: ${logoFontFamily};
    font-size: 13vw;
    letter-spacing: 1vw;
    color: ${props => props.theme === 'light' ? '#000' : '#fff'};
    margin: 0;

    @media ${mqMedium} {
      font-size: 10vw;
    }
    
    @media ${mqXlarge} {
      font-size: 9vw;
    }
`

export const Header = () => ( 
<ThemeConsumer>
  {({theme}) => (
    <Head><H1 theme={theme}>simplesthing</H1></Head>
  )}
</ThemeConsumer>)



