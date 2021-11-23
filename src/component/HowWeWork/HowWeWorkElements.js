import styled from "styled-components";

export const Container = styled.div`
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    /* margin-bottom: 100px; */
    top:0;
    right:0;
    /* position: fixed; */
    padding-bottom: 100px;
    @media screen and (max-width: 960px) {
        /* margin-bottom: 200px;
        height: 150vh; */
  }
    `

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* background: blue; */
    /* opacity: .2; */
    /* height: 100%; */
`
export const TitleShadow = styled.h1`
    user-select: none;
    text-align: right;
    margin-top: 0px;
    margin-left: 10%;
    margin-right: 10%;
    color: transparent;
    font-size: 64px;
    text-shadow: 0px -120px 0px rgba(255, 255, 255, 0.2) ;
`

export const HWWShadow = styled.h1`
    position: absolute;
    height: 10%;
    /* color:transparent; */
    margin-top: 0px;
    line-height: 0px;
    font-size: 64px;
    text-shadow: -120px -80px 0px rgba(255, 255, 255, 0.2) ;
`

export const Title = styled.h1`
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 0px;
    margin-bottom: 0px;
    color: white;
    text-align: right;
    /* width: 100%; */
    /* background: black; */
    
`

export const RowWrapper = styled.div`
    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const ImageList = styled.img`
    margin-top: 10px;
    max-width: 300px;

    @media screen and (max-width: 960px) {
    max-width: 300px;
  }
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ImageLeft = styled.img`
    max-height: 60vh;

    @media screen and (max-width: 960px) {
        /* max-height: 50vh; */
        width: auto;
  }
`

export const BgImage = styled.img`
object-fit: cover;
z-index:-1 ;
position: absolute;
 /* width: 90vw; */
height:100vh;
width: 100%;

@media screen and (max-width: 960px) {
        /* height: 200vh;
        width: auto; */
  }
`