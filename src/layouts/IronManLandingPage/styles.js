import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    padding: env(safe-area-inset);
  }

  html, body, #___gatsby, #gatsby-focus-wrapper, main {
    height: 100%;
  }

  body {
    color: #030504;
    font-family: "Nunito", Arial, sans-serif;
    margin: 0;
  }

  button {
    appearance: none;
    border: none;
    font: inherit;
    letter-spacing: inherit;
    background-color: transparent;
    padding: 0;
  }
`

export const GradientSection = styled.section`
  background: rgb(204, 51, 50);
  background: linear-gradient(
    120deg,
    rgba(204, 51, 50, 1) 50%,
    rgba(234, 141, 51, 1) 90%,
    rgba(255, 204, 51, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);

  @media (min-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }
`
