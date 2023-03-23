import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-family:"Roboto",sans-serif;
  }
 */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button,input {
    cursor: pointer;
    
  }
  
`;
