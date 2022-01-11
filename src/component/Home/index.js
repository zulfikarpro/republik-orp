import React from 'react'
import { Container, ContentDiv, Title, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'

const HomePage = ({mobile}) => {
    return (
        <Container>
            <ContentDiv id='home' style={{height:'100vh', width:'100vw', background:`${mobile? '':'rgba(255,255,255,.5 )' }`}}>
                {/* <Img src={titletrimatra}></Img> */}
                <Title style={{}}>Established to strenghten</Title>
                <Title>Indonesian Defense ecosystem</Title>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
