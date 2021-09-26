import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding:0.5rem 1rem;
    position: ${props=>props.genBtn ? 'absolute' : 'relative'};
    right:${props=>props.genBtn && '0'};
    bottom:${props=>props.genBtn && '0'};
    z-index:3;
`