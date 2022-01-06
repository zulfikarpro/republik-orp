import styled from "styled-components";

export const FooterContainer = styled.div`
    color: #fff;
    justify-content: center;
    align-items: center;
    margin:0px;
    
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
text-align:center;
font-size: 1rem;
margin: auto;

@media screen and (max-width:960px){
    font-size:.6rem;
}

`