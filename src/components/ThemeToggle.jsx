import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import styled from 'styled-components'
import { mqMedium } from '../Style'

export const flashlight_black = 'https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_black.png'
export const flashlight_white = 'https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_white.png'


const ThemeToggleButton = styled.button`
  border: none;
  padding: 0;
  margin: 0 3%;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background: transparent;
  transform: scaleX(-1);
  @media ${mqMedium} {
    margin: 0;
  }
  &:active, &:focus {
    outline: none;
  }
`

const IconImage = styled.img`
  height: 35px;
  @media ${mqMedium} {
    height: 50px;
  }
`

export default function ThemeToggle() {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <ThemeToggleButton  onClick={toggleTheme}>
          { theme === 'light' ? (<IconImage src="https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_black.png" alt="dark mode"/>) :  ( <IconImage src="https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_white.png" /> ) }
        </ThemeToggleButton>
      )}
    </ThemeConsumer>
  )
}