import styled from 'styled-components'

export const TestDiv = styled.div`
    /* display: flex; */
    padding:10px 20px;
    margin-top: 20px;
    border-radius: 10px; 
    background:white;
    color:#C0022D;
    @media screen and (max-width: 960px) {
        margin-top: 0px;
    }
`
export const Title = styled.h1`
    @media screen and (max-width: 960px) {
       line-height: 0px;
       margin-top: 10%;
      }
`

export const P = styled.p`
    @media screen and (max-width: 960px){
    font-size: 0.8rem;
    line-height: 0.2rem;
}
`