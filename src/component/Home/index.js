import React from 'react'
import { Container, ContentDiv, CarouselDiv, Img, TitleDiv,Title1, Title2 } from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'

const HomePage = () => {
    return (
        <Container>
            <ContentDiv id='home'>
                <TitleDiv style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'absolute', width:'100%', color:'red'}}>
                    <Title1>We’re Professional Trusted &amp; Competent</Title1>
                    <Title2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Title2>
                </TitleDiv>
                <CarouselDiv>
                <Carousel
                indicatorContainerProps={{
                    style: {
                        marginTop: '-40px', // 5
                        textAlign: 'center' // 4
                    }
            
                }}
                >
                    <img src={banner1} style={{maxWidth:'100%'}}></img>
                    <img src={banner2} style={{maxWidth:'100%'}}></img>
                    <img src={banner3} style={{maxWidth:'100%'}}></img>
                </Carousel>
                </CarouselDiv>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
