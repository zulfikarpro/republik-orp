import styled from 'styled-components'

export const Container = styled.div`
z-index: 1;
    display:flex;
    justify-content: center;
    width: 100vw;
    max-height: 100%;
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    max-height: 100%;
    justify-content: center;
`

export const CarouselDiv = styled.div`
    z-index:-1;left:0; max-width:100%; max-height:100%; padding-bottom:10%;
    @media screen and (max-width: 960px){
        margin-top: 80px;
        /* padding-bottom:30%; */
    }
`

export const Img = styled.img`
/* margin-right: 10%;
        width:50%; */
    @media screen and (max-width:960px){
        /* width:40%;
margin-right: 20%; */
    }
`

export const TitleDiv = styled.div`
/* top:40; */
    @media screen and (max-width:960px){
        /* top:20 */
    }
`

export const Title = styled.h1`
 /* Will override color (regardless of order) */
    font-size:4vw;
    line-height:.1rem;
    text-shadow:
   -.5px -.5px 0 #fff,  
    /* .5px -.5px 0 #fff, */
    /* -.5px .5px 0 #fff, */
     .5px .5px 0 #fff;
    color:#282855;
    margin-left: 10%;
    @media screen and (max-width:960px){
        font-size: 6vw;
        margin-left:auto;
        margin-right:auto;
    }
`