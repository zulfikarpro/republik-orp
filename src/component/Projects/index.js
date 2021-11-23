import React from 'react'
import {Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/projectbg.png'
import image from '../../images/bg/projectimg.png'
import Carousel from 'react-material-ui-carousel'
import { H1,H2,P } from '../AboutUs/AboutUsElement'


const CarouselContent = ({title, content})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
            <H1 style={{fontSize:'2vw'}}>{title}</H1>
            <P style={{textAlign:'left', fontSize:'1.2vw'}}>{content}</P>
        </div>
    )
}
const ProjectsPage = () => {
    return (
        <div id='projects'style={{display:'flex', flexDirection:'column', justifyContent:'flex-end',backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',minHeight:'100vh', height:'100%', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', color:'white', textAlign:'center', width:'100%', margin:'auto'}}>
                    
             <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', margin:'10%', color:'#fff', maxWidth:'35%',maxHeight:'80%', textAlign:'justify',height:'auto'}}>
                 <Carousel>
                     <CarouselContent title='Navigation Service' content='Design philosophies are fundamental guiding principles that dictate how a designer approaches his/her practice. Reflections on material culture and environmental concerns.'/>
                 </Carousel>
             </div>
             <div style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
                     <img src={image} style={{width:'100%', zIndex:'1'}}/>
                   <div style={{position:'absolute', maxWidth:'400px', right:'0', marginRight:'6%', color:'white', zIndex:2}}>
                    <H1 style={{fontSize:'3vw'}}>Projects</H1>
                    <div style={{position: 'absolute', height:'2px', width:'100%', background:'white'}}/>
                    <P style={{textAlign:'justify', fontSize:'1.2vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                
                    </div>
                </div>
            </div>
        </div>
        // <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', background:`url(${bg})`}}>
        // <ContentDiv style={{minWidth:'100%',height:'auto', justifyContent:'flex-start'}} id='projects'>
        // {/* <div style={{position:'absolute',right:'', width:'100%', height:'100%'}}>
        //        <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
        // </div> */}
        // <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
            
        //     <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', margin:'10%', color:'#fff', maxWidth:'35%',maxHeight:'80%', textAlign:'justify'}}>
        //         <Carousel>
        //             <CarouselContent title='Navigation Service' content='Design philosophies are fundamental guiding principles that dictate how a designer approaches his/her practice. Reflections on material culture and environmental concerns.'/>
                    
        //         </Carousel>
        //     </div>
        //     <div style={{height:'70%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        //         <img src={image} style={{maxHeight:'70%'}}/>
        //         <div style={{position:'absolute', maxWidth:'300px', right:'0', marginRight:'6%', color:'white'}}>
        //         <H1>Projects</H1>
        //         <div style={{position: 'absolute', height:'2px', width:'100%', background:'white'}}/>
        //         <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                
        //         </div>
        //     </div>
        // </div>

        // </ContentDiv>
        // </Container>
    )
}

export default ProjectsPage
