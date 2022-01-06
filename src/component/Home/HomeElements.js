import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
    width: 100%;
    max-width: 98vw;
    /* max-width: 100%; */

    @media screen and (max-width:960px){
        height: ${({ double }) => (double ? '200vh' : '100vh')};
    } 
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:100vh;

    @media screen and (max-width:960px){
    height:120vh;
        /* height: ${({ double }) => (double ? '200vh' : '100vh')}; */
    } 


`

export const CarouselDiv = styled.div`

    /* z-index:-1;left:0; max-width:100%; max-height:100%;
    @media screen and (max-width: 960px){
        margin-top: 80px;
    } */
`
export const Background = styled.img`

`

export const Img = styled.img`
z-index: 2;
margin: auto;
margin-left: 10%;
margin-right: 10%;
width: 50%;
    @media screen and (max-width:960px){
        width:60%;
    }
`

export const TitleDiv = styled.div`
/* top:40;
    @media screen and (max-width:960px){
        top:20
    } */
`