import styled from 'styled-components';
import image1 from '../../images/bg1@2x.png'
import logo from '../../images/logo.svg'

export const CustomInfoContainer = styled.div`
    padding-top: 100px;
    align-items: center;
    background: ${({ lightBg }) => (lightBg ? 'transparent' : 'rgba(0,0,0, 0.4)')};
    // background-image: url(${image1});
    /* background-image:linear-gradient(red, red), url(${props=> props.img? image1: ''}); */
    background-image: ${props=>props.img? 'url('+image1+'),linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.4))' : ''};
    object-fit: contain;
    background-blend-mode: multiply;
    background-position: center;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
      }

`

export const CustomInfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const CustomTextWrapper = styled.div`
// max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

`

export const CustomInfoRow = styled.div`
      display: column;
      grid-auto-columns: minmax(auto, 1fr);
        align-items: center;
        justify-content: center;
        // grid-template-areas: ${({ imgStart }) => imgStart ? "'col2 col1'" : "'col1 col2'"};
        // grid-template-areas: ${({align})=> align==='center'? "'col1 col2": ({imgStart} )=> imgStart? "'col2 col1'" : "'col1 col2'"};
        /* Must use '\' css class \'' */

        @media screen and (max-width: 768px) {
            // grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
        }
      

`