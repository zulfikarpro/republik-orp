import React from 'react'
import {Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/projectbg.png'
import image from '../../images/bg/projectimg.png'
import Carousel from 'react-material-ui-carousel'
import { H1,H2,P } from '../AboutUs/AboutUsElement'
import product1 from '../../images/projects/Group 119.png'
import product2 from '../../images/projects/Group 120.png'
import product3 from '../../images/projects/Group 121.png'
import product4 from '../../images/projects/Group 122.png'
import product5 from '../../images/projects/Group 123.png'
import product6 from '../../images/projects/Group 124.png'
import product7 from '../../images/projects/Group 125.png'
import product8 from '../../images/projects/Group 126.png'
import product9 from '../../images/projects/Group 127.png'


const CarouselContent = ({pic})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', justifyContent:'center'}}>
            <img src={pic} style={{width:'100%',}}/>
        </div>
    )
}
const ProjectsPage = () => {
    return (
        <Container style={{display:'flex', flexDirection:'column', justifyContent:'flex-end',backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',minHeight:'100vh', height:'100%', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', color:'white', textAlign:'center', width:'100%', margin:'auto',}}>
                    
             <div id='projects'  style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', margin:'10%', color:'#fff', maxWidth:'35%',textAlign:'justify',height:'80vh'}}>
                 <Carousel indicatorContainerProps={{
                    style: {
                        marginTop: '-40px', // 5
                        textAlign: 'center' // 4
                    }
                    }}>
                     <CarouselContent pic={product1}/>
                     <CarouselContent pic={product2}/>
                     <CarouselContent pic={product3}/>
                     <CarouselContent pic={product4}/>
                     <CarouselContent pic={product5}/>
                     <CarouselContent pic={product6}/>
                     <CarouselContent pic={product7}/>
                     <CarouselContent pic={product8}/>
                     <CarouselContent pic={product9}/>
                 </Carousel>
             </div>
             <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'30%'}}>
                     <img src={image} style={{width:'100%', zIndex:'1'}}/>
                   <div style={{position:'absolute', maxWidth:'400px', right:'0', marginRight:'10%', color:'white', zIndex:2}}>
                    <H1 style={{fontSize:'3vw'}}>Projects</H1>
                    <div style={{position: 'absolute', height:'2px', width:'100%', background:'white', marginTop:'0px'}}/>
                    {/* <P style={{textAlign:'justify', fontSize:'1.2vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P> */}
                
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProjectsPage
