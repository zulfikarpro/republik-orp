import styled from 'styled-components';


export const Container = styled.div`
    /* height: 90vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* margin-bottom: 100px; */
    top:0;
    right:0;
    /* position: fixed; */
    padding-bottom: 100px;
    @media screen and (max-width: 960px) {
        /* margin-bottom: 200px;
        height: 150vh; */
  }
    `

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
/* background: blue; */
/* opacity: .2; */
/* height: 100%; */
`
export const DivAboutUs = styled.div`
position: absolute;
width:100%;
display:flex; 
flex-direction:row; 
justify-content:end;

@media screen and (max-width:960px){
    flex-Direction:column;
}

` 

export const H1 = styled.h1`
    font-size: 2.4rem;
    /* font-size: 1.6vw; */
`

export const H2 = styled.h2`
    font-size: 1.4rem;
    /* font-size: 1.2vw; */
`

export const P = styled.p`
    font-size: 1rem;
    @media screen and (max-width: 960px){
        
    font-size: 1.4vh;
    }
`