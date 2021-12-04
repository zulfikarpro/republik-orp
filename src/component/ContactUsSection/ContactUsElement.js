import styled from "styled-components";

export const ContactUsContainer = styled.div`
color: #fff;
`

export const ContactUseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  z-index: 1;
  height: 100vh;
  max-width: 1440px;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
      flex-direction: column;
        }
  

`

export const ContactUsTextWrapper = styled.div`
background: 'red';
margin: auto;
min-height: 240px;
max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Input = styled.input`
border: 0;
margin: 10px 12px 10px 12px;
outline: none;
min-width: 400px;
    /* border-radius: 32px; */
  font-size: 1.5rem;
  /* border-radius:20px; */
  /* border: 0px; */

  /* ::placeholder,
  ::-webkit-input-placeholder {
    color: red;
    background: url(FaEnvelope);
  }
  :-ms-input-placeholder {
     color: red;
  } */

  @media screen and (max-width:960px){
    min-width: 0px;
  }
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 32px;
    background: #fff;


`

export const TextLineOne = styled.p`

`

export const TextLineTwo = styled.h1`
  font-size: 1.8rem;

`