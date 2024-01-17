import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #6d6ae6;
    --red: #ff5b56;
    --black: #111322;
    --white: #ffffff;
    --gray100: #3e3e43;
    --gray60: #9fa6b2;
    --gray20: #CCD5E3;
    --gray10: #E7EFFB;
    --bg: #F0F6FF;
    --Grey-Light: #f5f5f5;
    --Linkbrary-primary-color: #6D6AFE;
  }
  * {
    font-family: "Pretendard", sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    font-size: 62.5%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button{
    border: none;

  }
  button:hover{
    cursor: pointer;
  }
  input {
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
      display: none;
    }
  }

`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
