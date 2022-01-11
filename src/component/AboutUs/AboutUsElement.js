import styled from 'styled-components';
import image1 from '../../images/bg1@2x.png'
import logo from '../../images/logo.svg'
import truckImage from '../../images/Group89@2x.png'

export const AboutUsContainer = styled.div`
    padding-top: 100px;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-items: center;
    justify-content: center;
    /* display: flex; */
    /* background: blue; */
    /* background: ${({ lightBg }) => (lightBg ? 'transparent' : 'rgba(0,0,0, 0.4)')}; */
    // background-image: url(${image1});
    /* background-image:linear-gradient(red, red), url(${props=> props.img? image1: ''}); */
    /* background-image: ${props=>props.img? 'url('+image1+'),linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.4))' : ''}; */
    /* object-fit: contain; */
    background-blend-mode: multiply;
    background-position: center;
    max-width: 100%;
    /* @media screen and (max-width: 768px) {
        padding: 100px 0;
        margin-top: 20px;
      } */

`

export const AboutUsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 70%;
  width: 100%;
  /* background:'black' */
  /* align-self: center;
  justify-self: center; */
  /* max-width: 1100px; */
  /* margin-right: auto; */
  /* margin-left: auto; */
  /* padding: 0 24px; */
  /* align-items: flex-start; */
  /* align-content: flex-start; */
  /* justify-content: flex-start; */
  @media screen and (max-width:960px){
    height:100%
  }
`;

export const AboutUsTextWrapper = styled.div`
// max-width: 540px;
padding-top: 0;
padding-bottom: 120px;
top: 50%;
bottom: 50%;
align-self: center;
justify-self: center;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;

@media screen and (max-width: 960px) {
  width: 100%;
    padding-bottom: 20px;
    margin-left: 20px;
  }

`

export const AboutUsRow = styled.div`
/* background:blue; */
      display: flex;
      flex-direction: row;
      /* grid-auto-columns: minmax(auto, 1fr); */
        justify-content: center;
        z-index: 2;
      max-width: 100%;

        @media screen and (max-width: 768px) {
          width: 100vw;
          flex-direction: column;
          justify-content: center;
          margin-left:auto;
          margin-right:auto;
            // grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        }
      

`

export const AboutUsColumn2 = styled.div`
    /* background:white; */
        display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    /* grid-area: col2; */
    /* display: flex; */
    /* max-width: 60%; */
    /* background:black; */
    /* flex:1; */
    /* justify-self: center;
    align-self: center;
    justify-content: end;
    align-items: flex-end; */
    /* background: yellow; */

    @media screen and (max-width:960px){
      max-width:80%;
      width:100vw;
      margin-left:auto;
      margin-right:auto;
    }
`

export const AboutUsColumn1 = styled.div`
    /* background:white; */
        display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    /* max-width: 100%; */
    /* grid-area: col1; */
    /* background: green; */
    /* max-width: 100%; */
    /* justify-content: center;
    align-items: center;
    flex:1; */
    @media screen and (max-width:960px){
      max-width:80%;
      width:100vw;
      margin-left:auto;
      margin-right:auto;
    }
`
export const AboutUsImage = styled.img`
    align-items: center;
    justify-self: center;
    align-content: center;
    /* position: fixed; */
    max-width: 60%;
    @media screen and (max-width: 1080px) {
      height: 100%;
      max-width: 100%;
      margin-left:auto;
      margin-right:auto;
      object-fit: contain;
  }
  `

export const AboutUsHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  width: 100%;
  /* text-align:${({alignCenter})=> alignCenter? 'center': ''}; */
  text-align:left;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const HeadingShadow = styled.h1`
    height: 10%;
    color:rgba(255, 255, 255, 0.5);
    font-size: 64px;
    /* text-shadow: -5px -100px 0px rgba(255, 255, 255, 0.2) ; */
    @media screen and (max-width: 768px) {
    font-size: 30px;
    width: 100%;
    text-align:right;
  }
`

export const AboutUsSubtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  /* text-align:${({alignCenter})=> alignCenter? 'center': ''}; */
  text-align: justify;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (max-width: 960px) {
    font-size: 14px;
    width:100%;
    line-height: 14px;
    margin-right: 25px;
  }
`

export const DarkerBackground = styled.div`
  background: rgba(0,0,0, 0.4);
  /* position: absolute; */
  justify-self: center;
  align-self: center;
  display: flex;
  z-index: 2;
  height: 50%;
  width: auto;

  @media screen and(max-width:960px){
    height:100vh
  }
`
;