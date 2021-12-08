import React from 'react'
import { Container, ContentDiv, CarouselDiv, Img, TitleDiv } from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'
import titletrimatra from '../../images/titletrimatra.png'

const HomePage = () => {
    return (
        <Container>
            <ContentDiv id='home'>
                <TitleDiv style={{left:'0', top:'0',display:'flex', flexDirection:'row',margin:'auto',position:'absolute', height:'100vh',width:'100%'}}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'90%', zIndex:'4'}}>
                        <Img src={titletrimatra}/>
                    </div>
                </TitleDiv>
                <CarouselDiv style={{height:'100vh', width:'100vw'}}>
                <Carousel
                indicatorContainerProps={{
                    style: {
                        marginTop: '-40px', // 5
                        textAlign: 'center' // 4
                    }
            
                }}
                >
                    <img src={banner1} style={{height:'110vh',width:'100vw', objectFit:'cover', margin:'auto'}}></img>
                    {/* <img src={banner2} style={{maxWidth:'100%'}}></img>
                    <img src={banner3} style={{maxWidth:'100%'}}></img> */}
                </Carousel>
                </CarouselDiv>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
