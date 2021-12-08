import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media screen and (max-width:960px){
        height: ${({ double }) => (double ? '200vh' : '100vh')};
    } 
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;


`

export const CarouselDiv = styled.div`
    /* z-index:-1;left:0; max-width:100%; max-height:100%; */
    /* @media screen and (max-width: 960px){ */
        /* margin-top: 80px; */
        /* padding-bottom:30%; */
    /* } */
`

export const Img = styled.img`
margin-right: 10%;
        width:50%;
    @media screen and (max-width:960px){
        width:40%;
margin-right: 20%;
    }
`

export const TitleDiv = styled.div`
top:40;
    @media screen and (max-width:960px){
        top:20
    }
`
export const Title1 = styled.h1`
    text-align: 'center';
    font-size: 4rem;
    max-width: 800px;
    color:#fff;
`

export const Title2 = styled.h1`
    font-size: 1rem;
    max-width: 800px;
    color:#fff;
`