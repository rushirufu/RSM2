import { createGlobalStyle } from "styled-components";
import InterBold from "../assets/fonts/inter/Inter-Bold.otf";
import Inter from "../assets/fonts/inter/Inter-Regular.otf";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    @font-face {
        src: url(${InterBold});
        font-family: "Inter";
        font-weight:"bold"
    }
    @font-face {
        src: url(${Inter});
        font-family: "Inter";
        font-weight:"normal"
    }
    body{
        background-color: white;
        font-family: "Inter";
        color:whitesmoke;
        font-size: 14px;
    }

    h1 {
        font-size: 24px;
        color: #0d6efd;
        margin-top:20px;
        margin-bottom:30px;
    }
    h2 {
        font-size: 16px;
        color: black;
        margin-bottom:10px;
    }
`;
