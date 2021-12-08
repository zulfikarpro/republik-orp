import styled from 'styled-components'

export const DivBackground = styled.div`
position:absolute; 
width:100%; 
height:100%; 
display:flex; 
flex-direction:row; 
justify-content:center;
background-position: center;
background-repeat: no-repeat;
max-height: 200vh;

@media screen and (max-width:960px){
    height: 200vh;
}

`

export const Container = styled.div`
z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
max-height: 200vh;

@media screen and (max-width:960px){
    height: 200vh;
}
`

export const ContentDiv = styled.div`
    display:flex;
    flex-direction: column;
    /* max-height: 100%; */
    justify-content: center;
    max-width: 100vw;
    @media screen and (max-width:960px){
    height: 200vh;
}
`

export const Img = styled.img`
    max-width: 100%;

    @media screen and (max-width:960px){
        margin: 10%;
        max-width: 80%;
    }

`

export const Title = styled.h1`
width:100%; 
text-align:center; 
position:relative;
margin-top: 100px;
/* textShadow: 0px -100px 0px rgba(255; 255; 255; 0.2)  */

    @media screen and (max-widht: 960px){
        margin-bottom: 400px;
    }
`

export const TitleShadow = styled.h1`
    position:absolute;
    font-size: 5rem;
  color: transparent;
  width: 100%;
  text-shadow: 0px -120px 0px rgba(255, 255, 255, 0.2);


`