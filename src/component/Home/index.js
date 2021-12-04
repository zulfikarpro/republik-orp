import React from 'react'
import { Container, ContentDiv, CarouselDiv, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'
import titletrimatra from '../../images/titletrimatra.png'

const HomePage = () => {
    return (
        <Container style={{maxWidth:'100vw'}}>
            <ContentDiv id='home'>
                <TitleDiv style={{left:'0', top:'0',display:'flex', flexDirection:'row',margin:'auto',position:'absolute', height:'100vh',width:'100%'}}>
                    <div style={{display:'flex', flexDirection:'row', backGround:'blue', justifyContent:'flex-start', width:'100%',maxWidth:'100vw', zIndex:'4'}}>
                        <Img src={titletrimatra} />
                    </div>
                </TitleDiv>
                <CarouselDiv style={{height:'100vh', maxWidth:'100vw'}}>
                <Carousel
                indicatorContainerProps={{
                    style: {
                        marginTop: '-40px', // 5
                        textAlign: 'center' // 4
                    }
            
                }}
                >
                    <img src={banner1} style={{width:'100%', height:'auto', objectFit:'contain', margin:'auto'}}></img>
                </Carousel>
                </CarouselDiv>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
