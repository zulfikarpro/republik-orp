import React from 'react'
import {Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/projectbg.png'
import bgMobile from '../../images/bg/bgprojects.png'
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
import { ProjectsDiv, TitleDiv, CarouselDiv } from './ProjectsElements'


const CarouselContent = ({pic})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', justifyContent:'center'}}>
            <img src={pic} style={{width:'100%',}}/>
        </div>
    )
}

const TextTitle = ({mobile}) =>{
    if(mobile){
        return(<div><H1 style={{fontSize:'2.4rem'}}>Projects</H1>
        <div style={{height:'2px', width:'40%',margin:'auto', background:'white', marginTop:'0px'}}/></div>)
    }else{
        return(
            <div style={{position:'absolute', maxWidth:'400px', right:'0', marginRight:'10%', color:'white', zIndex:2, display:'flex', flexDirection:'column', bakcground:'red'}}>
                    <H1 style={{fontSize:'3vw'}}>Projects</H1>
                    <div style={{height:'2px', width:'100%', background:'white', marginTop:'0px'}}/>
                    {/* <P style={{textAlign:'justify', fontSize:'1.2vw'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P> */}
                
                    </div>
        )
    }
}
const ProjectsPage = ({mobile}) => {
    const deviceTypeMobile = mobile || true;
    const BackgroundImages = mobile? bgMobile: bg;
    return (
        <Container style={{display:'flex', flexDirection:'column', justifyContent:'flex-end',backgroundImage:`url(${BackgroundImages})`, backgroundRepeat:'no-repeat', backgroundSize:'100vw', backgroundPositionX:'', minHeight:'100vh', height:'100%', width:'100%'}}>
            <ProjectsDiv style={{}}>
                    
             <CarouselDiv id='projects'>
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
             </CarouselDiv>
             <TitleDiv>
                   <TextTitle mobile={deviceTypeMobile}/>
                   <h1>{deviceTypeMobile}</h1>
                </TitleDiv>
            </ProjectsDiv>
        </Container>
    )
}

export default ProjectsPage
