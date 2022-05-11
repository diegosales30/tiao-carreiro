import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
  :root{
    
  }
  body{
      background: url(${backgroundImg}) no-repeat  center fixed;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  `;
