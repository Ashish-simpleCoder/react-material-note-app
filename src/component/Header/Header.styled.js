import styled from 'styled-components'

export const HeadingDiv = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:${props=>props.justify_content};
    height:${props=>props.height};
    padding:clamp(0.5rem,1rem,1vw) clamp(2rem,4rem,4vw);
    border-bottom:1px solid var(--border);

    h3{
        display:flex;
        align-items:center;
        font-size:${({fontSize})=>fontSize};
        font-weight:${({fontWeight})=>fontWeight};
        color:var(--site_title);
    }

    span{
        display:flex;
        width:clamp(3rem,4rem,4vw);
        margin-right:1rem;
        img{
            width:100%;
        }
    }
`