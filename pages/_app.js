import { createGlobalStyle } from "styled-components";
import { globalCss } from "../components/styles";

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
