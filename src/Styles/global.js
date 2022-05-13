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
    --blue : #4c89e3;
    --grey : #ccc;
    --white : #fff;
    --white-transparent : rgba(235, 235, 235, 0.9);
    --shadow:  rgba(0,0,0,0.5);
    --red1: #ff6961;
    --red2: #800;
    --border-grey: #ccc;
    --font-grey: #808080
    
    
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
