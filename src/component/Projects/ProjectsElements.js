import styled from 'styled-components'


export const CarouselDiv = styled.div`
display:flex;
 flex-direction:column;
justify-content:flex-end;
 margin:10%;
 color:#fff;
 max-width:35%;
text-align:justify;
height:80vh;

@media screen and (max-width:960px){
    max-width:80%
}
`

export const TitleDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin: auto;
margin-right:0px;
padding:60px;
border-radius:125px 0px 0px 125px;
 width: 25%;
    background: #115A83;
    height: 100%;

 @media screen and (max-width:960px){
    width: 100%;
    min-height:80px;
    padding:0px;
    margin-bottom:0px;
    margin-top:100px;
border-radius:0px 0px 0px 0px;
 }
`

export const ProjectsDiv = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    color:white;
    text-align:center;
    width:100%;
    margin:auto;

 @media screen and (max-width:960px){
    flex-direction:column-reverse;

 }
}}

`