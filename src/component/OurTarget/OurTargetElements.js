import styled from "styled-components";

export const DivBlue = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height:40%; 
width:100%;
background: linear-gradient(180deg, #0A287B 0%, #05143E 100%);
transform: rotate(-180deg);
z-index: -1;
position: absolute;
/* height: 100%; */
    @media screen and (max-height: 960px){
        height: 50vh;
    }
`