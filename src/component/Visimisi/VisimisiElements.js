import styled from "styled-components";
export const VisimisiContainer = styled.div`
    /* margin-top: 100px;
    margin-bottom: 100px; */
    height: 90vh;
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
        text-align:center;
        margin: auto;
        width: 80%;
        padding-bottom: 50px;
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
    
    @media screen and (max-width: 960px){
        font-size: 0px;
        height: 0px;
    }
`

export const VisimisiParagraph = styled.p`
    width: 80%;
    margin-right: 20px;
    text-align: justify;
    color: #fff;
    font-size: 17px;

    @media screen and (max-width:960px){
        width: 100%;
        font-size:15px;
        text-align:center
    }

`