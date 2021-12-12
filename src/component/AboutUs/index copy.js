import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/companybg.png'
import image from '../../images/bg/companyimg.png'
import { H1,H2,P } from './AboutUsElement'
import Carousel from 'react-material-ui-carousel'
import imagePartner from '../../images/partner1.png'
import imageIso from '../../images/iso.png'
import imageClients from '../../images/client.png'
const CarouselItem = ({title, image}) =>{
  return(
  <div style={{width:'100%', maxWidth:'500px',minHeight:'500px', display:'flex', flexDirection:'column'}}>
    <H1 style={{fontSize:'1.3rem', textAlign:'center'}}>{title}</H1>
    {/* <div style={{width:'100%', height:'20px'}}/> */}
    <img src={image} style={{height:'50%', width:'auto'}}/>
  </div>
  )

}

const AboutUsPage = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100vh', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='aboutus'>
               <div style={{position:'absolute',right:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
                </div>
                 <div style={{width:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
                   <div style={{ diplay:'flex', flexDirection:'column', justifyContent:'center'}}>
                     <img src={image}/>
                   </div>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'35%',maxHeight:'80%', textAlign:'justify'}}>
                    <H1>Company</H1>
                    <div style={{width:'100%', height:'2px', background:'white'}}/>
                    <P>
                      PT. Palindo Marine is a Shipyard located in Tanjung Uncang, Batam Island, Indonesia. We have more than 30 years of experience in building Ships, starting as a company using GRP as the material for the ship structure to Aluminium, Steel, and the combination of Steel and Aluminium.
                    </P>
                    <P>
                      Our team of Workforce consist of highly skilled Engineers in their field of expertise with many years of experience in building various kind of veseels.
                    </P>
                    <P>
                      Lastly, we would like deeply express out Thanks to every Customers who have given us Chance and Opportunity in building their vessels, without them we might not be as big as right now.
                    </P>
                  <Carousel>
                    <CarouselItem title={'Partners'} image={imagePartner}/>
                    <CarouselItem title={'Management Standard'} image={imageIso}/>
                    <CarouselItem title={'Clients'} image={imageClients}/>
                  </Carousel>
                 </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage