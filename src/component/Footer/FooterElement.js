import styled from "styled-components";

export const FooterContainer = styled.div`
    color: #fff;
    justify-content: center;
    align-items: center;
`

export const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
z-index: 1;
height: 80px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
/* padding: 0 24px; */
/* justify-content: space-between; */


`

export const FooterFirstLine = styled.div`
display: flex;
flex-direction: row;
height:40px;

@media screen and (max-width:960px){
    justify-content: center;
}

`

export const FooterSecondLine = styled.div`
/* text-align: center; */
font-size: 1rem;

@media screen and (max-width:960px){
    text-align: center;
    font-size: 0.8rem;
}
`