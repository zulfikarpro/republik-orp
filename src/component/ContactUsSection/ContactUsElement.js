import styled from 'styled-components'

export const GridView = styled.div`
    display:flex; 
    flex-direction:row; 
    background:white; 
    padding: 5%;

    @media screen and (max-width: 960px){
        flex-direction: column;
    }

`