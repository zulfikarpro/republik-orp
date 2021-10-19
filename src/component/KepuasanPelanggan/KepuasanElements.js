import styled from  'styled-components' 

export const TextBox = styled.div`
    background: white ; 
    border-radius: 10px ; 
    max-width: 620px ; 
`

export const CarouselContainer = styled.div`
    padding-left:  10%  ; 
    padding-right:  10%  ; 
    margin-bottom: 60px  ; 
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const P = styled.p`
    @media screen and (max-width:960px){
        font-size: .8rem;
    }
`