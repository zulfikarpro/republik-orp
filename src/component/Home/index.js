import React from 'react'
import { Container, ContentDiv, Title, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'
import titletrimatra from '../../images/title.svg'

const HomePage = () => {
    return (
        <Container>
            <ContentDiv id='home' style={{height:'100vh'}}>
                {/* <Img src={titletrimatra}></Img> */}
                <Title style={{fontWeight:'200'}}>Established to strenghten</Title>
                <Title style={{fontWeight:'900', }}>Indonesian Defense ecosystem</Title>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
