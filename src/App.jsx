import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import globalStyle, { Layout } from './Style'
import { CircusGradient } from './components/CircusGradient'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

const rootEl = document.getElementById('root')
 
const GlobalStyle = createGlobalStyle`${globalStyle}`

const App = () => {
  return (
    <CircusGradient>
      <GlobalStyle />
      <Header />
      <Layout>
        <Hero />
      </Layout>
    </CircusGradient>
  )
}

const renderApp = () => {
    ReactDOM.render(
        <App />, rootEl
    )
}

renderApp()


// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp())
}