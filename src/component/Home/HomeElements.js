import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    min-height: 100vh;
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    max-height: 100%;
    justify-content: center;


`

export const CarouselDiv = styled.div`
    z-index:-1;left:0; max-width:100%; max-height:100%;
    @media screen and (max-width: 960px){
        margin-top: 80px;
        /* padding-bottom:30%; */
    }
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