import styled from 'styled-components';


export const Title = styled.h1`
    font-size: 2.4rem;
    margin-top: 80px;
    text-align: center;
    /* font-size: 1.6vw; */
`

export const P = styled.p`
    font-size: 1rem;
    max-width: 960px;
    margin: auto;
    text-align: center;
    @media screen and (max-width: 960px){
        
    font-size: 1.4vh;
    text-align:justify;
    max-width:80%;
    

    }
`