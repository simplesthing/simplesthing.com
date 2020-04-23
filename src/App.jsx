import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import globalStyle, { Layout } from './Style'
import { CircusGradient } from './components/CircusGradient'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { ThemeProvider } from './contexts/theme'
import { lightBase, base, gray0 } from './Style'

const rootEl = document.getElementById('root')
 
const GlobalStyle = createGlobalStyle`${globalStyle}`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      theme: 'dark',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'dark' ? 'light' : 'dark'
        }))
      }
    }

  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <GlobalStyle />
        <CircusGradient theme={this.state.theme}>
          <Header />
          <Layout>
            <Main />
          </Layout>
        </CircusGradient>
      </ThemeProvider>
    )
  }
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