import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:var(--pr_10);
    }
    html{
        font-size:62.5%;
    }
    body{
        background:var(--body-bg);
        transition:background 1s ease;
    }
    button{
        cursor:pointer;
        border:none;
        transition:transform 0.3s ease;
        border-radius:50%;
        background:var(--pr_70);
        font-size:clamp(1.5rem,2rem,2vw);
        &:active{
            transform:translateY(0.5rem) scale(0.9);
            outline:1px solid var(--pr_80);
            box-shadow:0 0.5rem 0.5rem rgba(0,0,0,0.5);
        }
    }
    .editable_mode{
        position:fixed;
        width:90%;
        max-width:60rem;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border:1px solid green;
        z-index:4;
        cursor:auto;
        button.save_btn{
            opacity:1 !important;
        }
    }
`