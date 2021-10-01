import styled from 'styled-components';
import image1 from '../../images/bg1@2x.png'
import logo from '../../images/logo.svg'

export const AboutUsContainer = styled.div`
    padding-top: 100px;
    height: 840px;
    align-items: center;
    justify-content: center;
    /* background: ${({ lightBg }) => (lightBg ? 'transparent' : 'rgba(0,0,0, 0.4)')}; */
    // background-image: url(${image1});
    /* background-image:linear-gradient(red, red), url(${props=> props.img? image1: ''}); */
    /* background-image: ${props=>props.img? 'url('+image1+'),linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.4))' : ''}; */
    /* object-fit: contain; */
    background-blend-mode: multiply;
    background-position: center;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
        margin-top: 20px;
      }

`

export const AboutUsWrapper = styled.div`
  display: grid;
  background: rgba(0,0,0, 0.4);
  z-index: 1;
  height: auto;
  width: 100%;
  /* max-width: 1100px; */
  /* margin-right: auto; */
  /* margin-left: auto; */
  /* padding: 0 24px; */
  align-items: center;
  justify-content: center;
`;

export const AboutUsTextWrapper = styled.div`
// max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
justify-content: start;
align-items: left;

`

export const AboutUsRow = styled.div`
      display: grid;
      grid-auto-columns: minmax(auto, 1fr);
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 768px) {
            // grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        }
      

`

export const AboutUsColumn2 = styled.div`
    grid-area: col2;
`

export const AboutUsColumn1 = styled.div`
    grid-area: col1;
    justify-content: start;
    align-items: flex-start;
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

export const AboutUsSubtitle = styled.p`
  max-width: 600px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  /* text-align:${({alignCenter})=> alignCenter? 'center': ''}; */
  text-align: start;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;