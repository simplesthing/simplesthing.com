import { createGlobalStyle } from "styled-components";
import { globalCss } from "../components/styles";
import { Analytics } from '@vercel/analytics/react';

const GlobalStyle = createGlobalStyle`${globalCss}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
