import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    :root {
        --light-blue: #289eed;
        --light-1: #ffffff;
        --light-2: #d8dde3;
        --light-3: #f5f7f7;
        --dark: #222324;
        --gray: #a3a7a8;
        --gray-2: #E3E1DC;
        --brown: #291507;

        --radius: 4rem;
        --transition: all ease-in-out 0.5s;
        --shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        --shadow-hover: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
        --line-height: 35px;
        --border-top: 0.8px #d8d6d6 solid;
        --hover: rgb(204, 203, 253) 0 5px 10px 0px;
    }

    
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
        color: var(--brown);
    }

    body{
        scroll-behavior: smooth;
        background: var(--light-1);
    }

    hr{
      opacity: 0.12;
    }

    a { 
      text-decoration: none;
     }

    input, select, textarea{
      background: var(--light-1);
      border: none;
      outline: none;
      padding: 10px;
    }

    img {
        width: 100%;
    }

    ul, li{
        list-style: none;
    }
`;

export const Anchor = styled(Link)`
  text-decoration: none;
`;

export const iconStyle = (width, color, maxWidth, minWidth, custom) => {
  return {
    color,
    ...custom,
    cursor: "pointer",
    width: `${width}rem`,
    maxWidth: `${maxWidth}rem`,
    minWidth: `${minWidth}rem`,
  };
};

export const mediaScreen = () => {
  const screen = {
    sm: (style) => `
      @media screen and (max-width: 375px) {
        ${style}
      }
    `,
    md: (style) => `
      @media screen and (min-width: 376px) and (max-width: 750px) {
        ${style}
      }
    `,
    lg: (style) => `
      @media screen and (min-width: 751px) and (max-width: 1115px) {
        ${style}
      }
    `,
    xl: (style) => `
      @media screen and (min-width: 1116px) {
        ${style}
      }
    `,
  };
  return {
    ...screen,
  };
};

export const Margin = `
  @media screen and (max-width: 375px) {
    margin: 0 1rem 0 1rem;
  }
  @media screen and (min-width: 376px) and (max-width: 750px) {
    margin: 0 1.2rem 0 1.2rem;
  }
  @media screen and (min-width: 751px) and (max-width: 1115px) {
    margin: 0 2rem 0 2rem;
  }
  @media screen and (min-width: 1116px) {
    margin: 0 3rem 0 3rem;
  }
`;

export default GlobalStyle;
