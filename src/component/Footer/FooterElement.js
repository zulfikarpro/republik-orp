import styled from "styled-components";

export const FooterContainer = styled.div`
    color: #fff;
    justify-content: center;
    align-items: center;
    margin:0px;
    
    background:linear-gradient(270deg, #596B80 27.08%, #0C1A2B 112.98%);
`


export const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
height: 80px;
width: 100%;
max-width: 1100px;
margin:auto;
/* padding: 0 24px; */
/* justify-content: space-between; */


`

export const FooterFirstLine = styled.div`
display: flex;
flex-direction: row;
margin:auto;
margin-bottom: 0px;
height:40px;
max-width: 200px;
`

export const FooterSecondLine = styled.div`
font-size: 1rem;
margin: auto;

`