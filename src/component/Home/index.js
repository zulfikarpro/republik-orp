import React from 'react'
import { Container, ContentDiv, DivContent, Img, Title, TitleDiv, P } from './HomeElements'
import Carousel from 'react-material-ui-carousel'
import banner1 from '../../images/banner/banner1.png'
import banner2 from '../../images/banner/banner2.png'
import banner3 from '../../images/banner/banner3.png'
import logo from '../../images/logoorp.png'
import bg from '../../images/bg/bghome2.png'
import bgimage from '../../images/bg/bgimagehome.png'

const HomePage = () => {
    return (
        <Container id="home">
            <ContentDiv id='home' style={{height:'100vh', width:'100%'}}>
                <DivContent>
                    <img src={bg} style={{position:'absolute', width:'100%', minHeight:'200px', objectFit:'cover', zIndex:'-1', top:'40%'}}/>
                <div style={{width:'40%', display:'flex', flexDirection:'row', justifyContent:'center', height:'100%', padding:'auto', margin:'auto', marginLeft:'0px'}}>
                    <Img src={logo} style={{maxHeight:'200px',maxWidth:'50%', objectFit:'contain'}}></Img>
                </div>
                <div style={{display:'flex', flexDirection:'column', height:'100%',width:'50vw' ,color:'#fff'}}>
                    <Title>Our Company</Title>
                    <P style={{textAlign:'justify'}}>
                    Established since October 27, 2014 as a holding company of several subsidiaries such as aero, space, palindo, trimatra, rex, armamen, republic of defense with the majority of businesses engaged in supporting land, sea and air defense system with high professionalism and supported by trained and experienced human resources.
                    </P>
                    
                </div>
                </DivContent>
                {/* <Title style={{fontWeight:'200'}}>Established to strenghten</Title>
                <Title style={{fontWeight:'900', }}>Indonesian Defense ecosystem</Title> */}
            </ContentDiv>
        </Container>
    )
}

export default HomePage
