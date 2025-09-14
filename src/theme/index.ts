import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

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
`;

export const lightTheme = {
  colors: {
    bg: "#FFFFFF",
    text: "#111111",
    muted: "#666666",
    border: "#E5E7EB",
  },
  font: {
    base: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    size: { body: "16px", h1: "24px", h2: "20px" },
    weight: { regular: 400, medium: 500, bold: 700 },
    lineHeight: { body: 1.6, heading: 1.2 },
  },
  radius: { sm: "6px", md: "10px", lg: "16px" },
  spacing: (n: number) => `${4 * n}px`,
};

export type AppTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
