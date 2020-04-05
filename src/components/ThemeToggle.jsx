import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import styled from 'styled-components'




export default function ThemeToggle() {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <button  onClick={toggleTheme}>
          { theme === 'light' ? '🌙' : '☀'}
        </button>
      )}
    </ThemeConsumer>
  )
}