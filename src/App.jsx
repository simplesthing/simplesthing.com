import { base, lightBase } from "./Style";
import globalStyle, { Layout } from "./Style";


import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./contexts/theme";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Router from './pages/Router'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${(props) => (props.light ? lightBase : base)};
`;

const rootEl = document.getElementById("root");

const GlobalStyle = createGlobalStyle`${globalStyle}`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "dark" ? "light" : "dark",
        }));
      },
    };
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <GlobalStyle />
        <Wrapper>
          <Router/>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, rootEl);
};

renderApp();

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
  module.hot.accept("./components/App.jsx", () => renderApp());
}
