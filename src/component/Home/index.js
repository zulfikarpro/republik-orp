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
                <div style={{width:'50%', display:'flex', flexDirection:'row', justifyContent:'center', maxHeight:'200px', padding:'auto', margin:'auto'}}>
                    <Img src={logo} style={{maxHeight:'200px',maxWidth:'50%', objectFit:'contain'}}></Img>
                </div>
                <div style={{display:'flex', flexDirection:'column', height:'100%',width:'50vw' ,color:'#fff'}}>
                    <Title>Our Company</Title>
                    <P style={{textAlign:'justify'}}>
                    Berdiri sejak 27 Oktober 2014 sebagai holding company dari beberapa anak 
perusahaan seperti aero, space, palindo, trimatra, rex, armamen, republik defence dengan mayoritas 
bisnis yang bergerak untuk mendukung kebutuhan pertahanan darat , laut dan udara dengan 
profesionalisme tinggi dan didukung oleh sumber daya manusia yg terlatih dan berpengalaman.
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
