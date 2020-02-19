import { createGlobalStyle } from "styled-components";

//variable
export const mainColor = "#499BA2";

export const GlobalStyle = createGlobalStyle`
  html{
    body,h1,h2,h3,p{
      margin: 0;
      padding: 0;
      font-family: monospace,Helvetica,sans-serif
    }

    * {
      box-sizing: border-box;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;
