import styled from 'styled-components'

export const Container = styled.div`
z-index: 1;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    max-height: 100vh;
    justify-content: center;


`

export const DivContent = styled.div`
    display:flex; 
    flex-direction:row;
    margin-top:17%;
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

display:flex;
flex-direction:column; 
height:50vh; 
width:50vw ;
color:#fff; 
justify-content:center;

    @media screen and (max-width:960px){
        margin-top:30vh;
margin-bottom:auto; 
        margin-left:auto;
        width: 80%;
    }
`


export const Title = styled.h1`
    font-size:2vw;
    line-height:.1rem;
    /* color:#282855; */
    @media screen and (max-width:960px){
        font-size: 2rem;
    }
`

export const P = styled.p`
    font-size: 1.2rem;
    padding-right: 10%;

    @media screen and (max-width:960px){
        font-size: 1rem;
    }
`

export const DivTextWWD = styled.div`

margin-top:200px ;
position:absolute; 
width:100%; 
height:100%;
display:flex; 
flex-direction:row; 
justify-content:start;
color:white;

@media screen and (max-width:960px){
    margin-top:0px;
    top: 100vh;
    height: 100vh;
    flex-direction: column;
}
`

export const DivText = styled.div`

`
