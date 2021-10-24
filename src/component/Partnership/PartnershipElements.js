import styled from "styled-components";

export const Img = styled.img`
width:50%; 

`

export const Bg = styled.img`
    z-index:-1 ;
    width:100%; 
    object-fit:cover;

    @media screen and (max-width:960px){
        height: 100%;
    }
`