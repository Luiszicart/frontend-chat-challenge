import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.base};
    font-size: ${({ theme }) => theme.font.size.body};
    line-height: ${({ theme }) => theme.font.lineHeight.body};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100dvh;
    display: grid;
    place-items: center;
  }
  #root {
    width: 393px;
    height: 852px;
    border-radius: 56px;
    overflow: hidden;
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.bg};
  }
  h1, h2, h3 { line-height: ${({ theme }) =>
    theme.font.lineHeight.heading}; margin: 0; }
  p { margin: 0; }
  a { color: inherit; text-decoration: none; }
  img, svg { display: block; max-width: 100%; }
  button { font: inherit; }
`;
