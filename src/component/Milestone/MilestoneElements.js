import styled from "styled-components";

export const MilestoneContainer = styled.div`
    padding-top: 100px;
    height: 840px;
    align-items: center;
    justify-content: center;
    /* background: blue; */
    /* opacity: 0.2; */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
        margin-top: 20px;
  }
`

export const MilestoneWrapper = styled.div`
    color: #fff;
    opacity: 1;
    width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
    max-width: 1100px;
    z-index: 1;
`

export const MilestoneTextWrapper = styled.div`
    /* position: absolute; */
`

export const MilestoneTitleShadow = styled.h1`
    position: absolute;
    color:transparent;
    font-size: 64px;
    text-shadow: 20px -100px 0px rgba(255, 255, 255, 0.2) ;
`
export const MilestoneTitle = styled.h1`
    /* position: absolute; */
   margin-bottom: 24px;
  font-size: 32px;
  /* line-height: 1.1; */
  /* font-weight: 600; */
  width: 100%;
  /* text-align:${({alignCenter})=> alignCenter? 'center': ''}; */
  text-align:left;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const MilestoneImages = styled.img`
/* background: blue; */
    max-width: 1280px;
    object-fit: contain;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;


    @media screen and (max-width: 960px) {
        min-width: 800px;
  }
`