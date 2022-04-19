import React from 'react'
import { Container, ContentDiv, Title, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'

const HomePage = ({mobile}) => {
    return (
        <Container>
            <ContentDiv id='home' style={{height:'100vh', width:'100vw', background:`${mobile? '':'rgba(255,255,255,.2 )' }`}}>
                {/* <Img src={titletrimatra}></Img> */}
                <Title style={{marginLeft:`${mobile? '':'auto' }`, marginRight:`${mobile? '':'auto' }`}}>Established to strenghten</Title>
                <Title style={{marginLeft:'auto', marginRight:'auto'}}>Indonesian Defense ecosystem</Title>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
