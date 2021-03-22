import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;

        @media screen and (max-width: 80em) {
            font-size: 58%; //1 rem = 12px, 12/16 = 75%
        }

        @media screen and (max-width: 56.25em) {
            font-size: 56.25%; //1 rem = 9px, 9/16 = 56.25%
        }

        @media screen and (max-width: 37.5em) {
        font-size: 50%; //1 rem = 8px/16 = 50%
    }

    @media screen and (max-width: 28.2em) {
        font-size: 43.75%; //1 rem = 6px/16 = 50%
    }


    }

    body{
        background: #0D0D0D;
        /* overflow: hidden; */
        color: #F2F2F2;
        font-family: "DM Sans"
    }

    h2{
        font-size: 3rem;
    }

    button {
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid blue;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

`

export default GlobalStyle;