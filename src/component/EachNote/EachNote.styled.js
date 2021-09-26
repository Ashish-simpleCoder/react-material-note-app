import styled from "styled-components";

export const EachNoteStyled = styled.div`
    background:white;
    width:100%;
    max-width:40rem;
    height:clamp(20rem,23rem,23vw);
    border:1px solid var(--border);
    cursor:pointer;
    background:var(--each_note);
    transition:all 0.4s ease 0.1s;
    h2,p{
        padding:clamp(0.3rem,0.5rem,0.5vw);
        color:var(--clr);

    }
    h2{
        border-bottom:1px solid var(--border);
        text-align:center;
        font-size:clamp(1.6rem,1.8rem,1.8vw);
    }
    p{
        font-size:clamp(1.5rem,1.7rem,1.7vw);
        height:70%;
        outline:none;
    }
    div.btns{
        display:flex;
        align-items:center;
        justify-content:space-between;
        button.save_btn{
            opacity:0;
        }

        button.delete_btn{
            background:rgb(255,30,10);
        }
    }


`