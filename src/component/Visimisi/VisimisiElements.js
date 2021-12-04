import styled from "styled-components";
import image1 from '../../images/test.png'
export const VisimisiContainer = styled.div`
    /* margin-top: 100px;
    margin-bottom: 100px; */
    height: 90vh;
    /* background-image: ${props=>props.img? 'url('+image1+'),linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.4))' : ''}; */
    /* background: blue; */
    width: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 960px) {
    padding-bottom: 20px;
  }
`

export const VisimisiWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    /* background: blue; */
    height: 100%;
    width: 100%;

`

export const VisimisiTextWrapper = styled.div`
    width: 45%;
    margin-right: 20px;
    margin-left: 5%;
    align-self: center;
    /* background: red; */
    @media screen and (max-width: 960px) {
        margin: auto;
    width: 100%;
    padding-bottom: 20px;
  }
`

export const VisimisiTitle = styled.h1`
    color: #fff;
`



export const TitleShadow = styled.h1`
    user-select: none;
    /* position: absolute; */
    height: 10%;
    width: 100%;
    color:rgba(255, 255, 255, 0.5);
    font-size: 64px;
    /* text-shadow: -10px -90px 0px rgba(255, 255, 255, 0.2) ; */
`

export const VisimisiParagraph = styled.p`
    width: 80%;
    margin-right: 20px;
    text-align: justify;
    color: #fff;
    font-size: 14px;

`