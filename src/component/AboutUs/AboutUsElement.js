import styled from 'styled-components';

export const AboutUsContainer = styled.div`
    padding-top: 100px;
    width: auto;
    height: 100vh;
    align-items: center;
    justify-items: center;
    justify-content: center;
    background-blend-mode: multiply;
    background-position: center;
    /* @media screen and (max-width: 768px) {
        padding: 100px 0;
        margin-top: 20px;
      } */

`

export const AboutUsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 60%;
  width: 100%;
  /* align-self: center;
  justify-self: center; */
  /* max-width: 1100px; */
  /* margin-right: auto; */
  /* margin-left: auto; */
  /* padding: 0 24px; */
  /* align-items: flex-start; */
  /* align-content: flex-start; */
  /* justify-content: flex-start; */
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
    padding-bottom: 20px;
  }

`

export const AboutUsRow = styled.div`
      display: flex;
      grid-auto-columns: minmax(auto, 1fr);
        align-items: center;
        justify-content: center;
      z-index: 2;

        @media screen and (max-width: 768px) {
            // grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        }
      

`

export const AboutUsColumn2 = styled.div`
    grid-area: col2;
    display: flex;
    justify-self: center;
    align-self: center;
    justify-content: end;
    align-items: flex-end;
    /* background: yellow; */
`

export const AboutUsColumn1 = styled.div`
    grid-area: col1;
    /* background: green; */
    justify-content: start;
    align-items: center;
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
    position: absolute;
    height: 10%;
    width: 50%;
    color:transparent;
    font-size: 64px;
    text-shadow: 20px -100px 0px rgba(255, 255, 255, 0.2) ;
    @media screen and (max-width: 768px) {
    font-size: 50px;
    width: 50%;
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
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`
export const AboutUsImage = styled.img`
    align-items: center;
    justify-self: center;
    align-content: center;
    width: 70%;
    @media screen and (max-width: 1080px) {
      width: 100%;
  }
  `
export const DarkerBackground = styled.div`
  background: rgba(0,0,0, 0.4);
  position: absolute;
  justify-self: center;
  align-self: center;
  display: flex;
  z-index: 1;
  height: 40%;
  width: 100%;
`
;