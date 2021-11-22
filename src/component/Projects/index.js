import React from 'react'
import {Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/projectbg.png'
import image from '../../images/bg/projectimg.png'
import Carousel from 'react-material-ui-carousel'
import { H1,H2,P } from '../AboutUs/AboutUsElement'


const CarouselContent = ({title, content})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
            <H1 style={{fontSize:'3.2rem'}}>{title}</H1>
            <P style={{textAlign:'left', fontSize:'1.6rem'}}>{content}</P>
        </div>
    )
}
const ProjectsPage = () => {
    return (
        
        <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', background:`url(${bg})`}}>
        <ContentDiv style={{minWidth:'100%', minHeight:'100vh',height:'auto', justifyContent:'flex-start'}} id='projects'>
        {/* <div style={{position:'absolute',right:'', width:'100%', height:'100%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
        </div> */}
        <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
            
            <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', margin:'10%', color:'#fff', maxWidth:'35%',maxHeight:'80%', textAlign:'justify'}}>
                <Carousel>
                    <CarouselContent title='Navigation Service' content='Design philosophies are fundamental guiding principles that dictate how a designer approaches his/her practice. Reflections on material culture and environmental concerns.'/>
                    
                </Carousel>
            </div>
            <div style={{height:'70%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <img src={image} style={{maxHeight:'70%'}}/>
                <div style={{position:'absolute', maxWidth:'300px', right:'0', marginRight:'6%', color:'white'}}>
                <H1>Projects</H1>
                <div style={{position: 'absolute', height:'2px', width:'100%', background:'white'}}/>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                
                </div>
            </div>
        </div>

        </ContentDiv>
        </Container>
    )
}

export default ProjectsPage
