import React from 'react'
import { Container, ContentDiv, Title, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'

const HomePage = () => {
    return (
        <Container>
            <ContentDiv id='home' style={{height:'100vh'}}>
                {/* <Img src={titletrimatra}></Img> */}
                <Title>Established to strenghten</Title>
                <Title>Indonesian Defense ecosystem</Title>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
