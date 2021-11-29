import styled from 'styled-components'

export const Container = styled.div`
z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    min-height: 100vh;
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    max-height: 100%;
    justify-content: center;


`

export const DivContent = styled.div`
    display:flex; 
    flex-direction:row;
    margin-top:14%;
    max-width:100%;

    @media screen and (max-width:960px){
        margin-top: 0%;
    }

`

export const CarouselDiv = styled.div`
    z-index:-1;left:0; max-width:100%; max-height:100%; padding-bottom:10%;
    @media screen and (max-width: 960px){
        margin-top: 80px;
        /* padding-bottom:30%; */
    }
`

export const Img = styled.img`
/* margin-right: 10%; */
        /* width:50%; */
    @media screen and (max-width:960px){
        /* width:40%; */
/* margin-right: 20%; */
    }
`

export const TitleDiv = styled.div`
/* top:40; */
    @media screen and (max-width:960px){
        /* top:20 */
    }
`

export const Title = styled.h1`
    font-size:2vw;
    line-height:.1rem;
    /* color:#282855; */
    @media screen and (max-width:960px){
        font-size: 6vw;
    }
`

export const P = styled.p`
    font-size: 1vw;
    padding-right: 10%;

    @media screen and (max-width:960px){
        /* font-size: 0.4rem; */
    }
`


export const DivText = styled.div`

margin-top:200px ;
position:absolute; 
width:100%; 
height:100%;
display:flex; 
flex-direction:row; 
justify-content:start;

@media screen and (max-width:960px){
    margin-top: 0px;
}

`
