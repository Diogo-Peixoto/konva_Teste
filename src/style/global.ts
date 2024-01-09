import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body,div,ul,li,header,main,nav,div,section,figure,figcaption,img,input,button,form,label,p,a,select,h1,h2,h3,h4,h5{
        padding: 0;
        margin: 0;
        border: 0;
        list-style: none;
        box-sizing: border-box;
    }

    textarea:focus, input:focus, select:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }   

    html, border-style, #root{
        height: 100%;
    }
    
    body{
        -webkit-font-smoothing: antialiased !important;
    }

`;
