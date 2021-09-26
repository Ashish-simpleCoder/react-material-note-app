import styled from "styled-components";

export const NoteInputStyled = styled.section`
    display : flex;
    justify-content:center;
    align-items:center;
    margin:clamp(2rem,2rem,2vw) auto;
    width:100%;
    flex-direction:column;
    padding:clamp(0.5rem,1rem,1vw) clamp(2rem,4rem,4vw);
    position:relative;

    input,textarea{
        max-width:50rem;
        width:100%;
        font-size:clamp(1.6rem,2rem,2vw);
        letter-spacing:0.05rem;
        padding:clamp(0.4rem, 0.6rem ,0.5vw);
        border:1px solid var(--input_border);
        resize:none;
        background:var(--input_bg);
        color:var(--clr);
        transition:background 0.2s ease 0.1s;
        &:focus{
            background:var(--input_focus);
        }
    }
    input{
        margin-bottom:0.5rem;
    }
    textarea{
        height:12rem;
    }
`