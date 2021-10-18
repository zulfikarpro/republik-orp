import styled from "styled-components";
import bgaboutus from "../../images/bg/bgaboutus.svg"
export const Container = styled.div` 
    /* background: ${({ page }) => (page==='aboutus' ? bgaboutus : '#fff')}; */
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    min-height: 600px;
`

export const Image = styled.div`

`

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 960px;

`