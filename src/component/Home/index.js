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
            <ContentDiv>
                <TitleDiv style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', position:'absolute', width:'100%', color:'red'}}>
                    {/* <div style={{display:'flex', flexDirection:'column', backGround:'blue'}}> */}
                        <Img src={titletrimatra}/>
                    {/* </div> */}
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
                    {/* <img src={banner2} style={{maxWidth:'100%'}}></img>
                    <img src={banner3} style={{maxWidth:'100%'}}></img> */}
                </Carousel>
                </CarouselDiv>
            </ContentDiv>
        </Container>
    )
}

export default HomePage
