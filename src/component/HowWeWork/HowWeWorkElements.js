import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    width: auto;
    margin-bottom: 100px;
    top:0;
    right:0;
    /* position: fixed; */
    @media screen and (max-width: 960px) {
        margin-bottom: 200px;
        height: 150vh;
  }
    `

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background: blue; */
    /* opacity: .2; */
    /* height: 100%; */
`
export const TitleShadow = styled.div`
background: blue;
    position: absolute;
    height: 10%;
    width: 100%;
    color:transparent;
    font-size: 64px;
    text-shadow: 20px -100px 0px rgba(255, 255, 255, 0.2) ;
`

export const HWWShadow = styled.h1`
    position: absolute;
    height: 10%;
    color:transparent;
    font-size: 64px;
    text-shadow: -200px -80px 0px rgba(255, 255, 255, 0.2) ;
`

export const Title = styled.h1`
    margin-left: 10%;
    margin-right: 10%;
    color: white;
    /* width: 100%; */
    align-self: flex-start;
    /* background: black; */
    
`

export const RowWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

export const ImageList = styled.img`
    margin-top: 10px;
`

export const LeftColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const RightColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

export const ImageLeft = styled.img`

    @media screen and (max-width: 960px) {
        max-height: 50vh;
        width: auto;
  }
`

export const BgImage = styled.img`
z-index:-1 ;
position: absolute;
 /* width: 90vw; */
height:100vh;
width: 100%;

@media screen and (max-width: 960px) {
        height: 200vh;
        width: auto;
  }
`