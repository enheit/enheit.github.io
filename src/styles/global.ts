import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%; 
  }
  
  body {
    background-color: ${(props) => props.theme.global.background};
    color: ${(props) => props.theme.global.color};
  }

  a {
    color: ${(props) => props.theme.global.link};
  }
`;