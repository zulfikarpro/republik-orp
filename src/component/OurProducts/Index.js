import React from 'react'
import { Grid } from '@material-ui/core'
// import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bgourproducts.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk1.png'
import produk2 from '../../images/products/produk2.png'
import { DivBackground, Container, ContentDiv, Img, Title, TitleShadow } from './OurProductElements'

const ItemsCarousel = ({pic, title, text, mobile}) =>{
  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
    <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:`${mobile?'355px':'474px'}`, height:`${mobile?'433px':'578px'}`, backgroundImage:`url(${pic})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:`${mobile?'50vh':'50vh'}`}}>
      {/* <Img src={pic}/> */}
      <h2 style={{margin:'10px', textAlign:'center'}}>{title}</h2>
      <p style={{margin:'10px', textAlign:'center', fontSize:'1rem', maxWidth:'60%', marginLeft:'auto', marginRight:'auto'}}>{text}</p>
      <div style={{height:'17%'}}></div>
    </div>
    </div>
  )
}

const onProductSeclected = (clicked) =>{
  const telco = document.getElementById('telco')
  const wireless = document.getElementById('wireless')

  if(clicked){
    telco.style.color='white'
    wireless.style.color='grey'
  }else{
    telco.style.color='grey'
    wireless.style.color='white'

  }
  
}

const OurProducts = ({mobile}
  ) => {
    return (
        <>
               <Container id="ourproduct" style={{height:'100vh', background:'red'}}>
                 <ContentDiv>
                 <DivBackground style={{ backgroundImage:`url(${bg})`, margin:'auto'}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', height:`${mobile? '100vh': '70vh'}`,marginTop:`${mobile?'':'auto'}`, justifyContent:'center'}}>
                      <Title>Our Services</Title>
                     <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <div style={{minHeight:'30vh' ,maxHeight:'60vh', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                          <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'center'}}>
                             <div style={{display:'flex', flexDirection:'column', height:'60%', justifyContent:'flex-end'}}>
                              <h1 style={{lineHeight:'.8', cursor:'pointer'}}id='telco' onMouseDown={()=> onProductSeclected(true)}>Telecomunication</h1>
                              <h1 style={{lineHeight:'.8', color:'grey', cursor:'pointer'}} id='wireless' onMouseDown={()=> onProductSeclected(false)}>Wireless Telecomunication</h1>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'60vh', width:'100%',}}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:`${mobile?'70vw':'100%'}`, margin:'auto', alignItems:'center'}}>
                        <Carousel
                        style={{padding:'10%', justifySelf:'center', background:'red'}}
                        indicatorContainerProps={{
                          style: {
                              marginTop: '-40px', // 5
                              textAlign: 'center' // 4
                          }
                          }}
                        >
                          <ItemsCarousel  mobile={mobile} pic={produk1} title='Recording System' text='Recording System provides comprehensive solution to record voice, screen and data and deliver system solutions with high added value.'/>
                          <ItemsCarousel mobile={mobile} pic={produk2}/>
                        </Carousel>
                          </div>
                        </div>
                        </Grid> 
                      </Grid>
                      <div style={{width:'100%', height:'20%'}}></div>
                    </div>
                  </DivBackground>
             </ContentDiv>
             
           </Container>
        </>
    )
}

export default OurProducts