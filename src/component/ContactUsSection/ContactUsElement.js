import styled from 'styled-components'

export const GridView = styled.div`
    display:flex; 
    flex-direction:row; 
    background:white;
    width:'100%';

    @media screen and (max-width: 960px){
        flex-direction: column;
    }

`

export const ButtonWADesktop = styled.div`
    width: 100%;

    @media screen and (max-width:960px){
        /* display: none; */
    }
`

export const ButtonWAMobile = styled.div`
    visibility:hidden;
    height: 0px;

    @media screen and (max-width:960px){
        visibility: visible;
        max-width: 100%;
        height: 60px;
        margin-top: 20px;
        margin-bottom: 20px;

    }
`

export const ButtonSubmit = styled.div`
background:#C0022D; 
border-radius:16px; 
color:#fff; 
text-align:center; 
padding: 12px;
margin-top:20px;
    @media screen and(max-widtH:960px){
        max-width: 400px;
    }
`

export const FormInput = styled.input`
padding:5px ; 
margin-left:10%;
margin-right: 10%;
`

export const P = styled.p`
    margin-left: 10%;
`