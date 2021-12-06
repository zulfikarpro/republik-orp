import React, {useState} from 'react'
import styled from 'styled-components';
import LandingSection from '../component/LandingSection';
import Video from '../videos/video1.mp4'
import bgMerah from '../images/bgMerah.png'
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'
import InfoSection from '../component/InfoSection';
import CustomInfoSection from '../component/CustomInfoSection/Index';
import ContactUsSection from '../component/ContactUsSection';
import Footer from '../component/Footer';
import Visimisi from '../component/Visimisi';
import HowWeWork from '../component/HowWeWork';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
  } from '../component/InfoSection/Data';
import AboutUsPage from '../component/AboutUs';
import Milestone from '../component/Milestone';
import OurClients from '../component/OurClients';


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}


    return (
        <div style={{minWidth:'100%'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <div style={{position:'fixed', top:'-50%', left:'', width:'200vw', height:'200%', zIndex:-4}}>
            <video style={{position: 'fixed', height:'100vh', width: '100%',right:'0', top:0, bottom:0, left:0, margin:'auto', zIndex:-4, overflow:'hidden', opacity: 1, background:'black', objectFit:'cover', objectPosition:'center'}} autoPlay loop muted src={Video} type='video/mp4'/>
                {/* <video style={{position: 'fixed', height:'100vh', width: '100%',right:'0', top:0, bottom:0, left:0, margin:'auto', zIndex:-4, overflow:'hidden', opacity: 1, background:'black'}} autoPlay loop muted src={Video} type='video/mp4'/> */}
                <div style={{position:'fixed',height:'100vh', width: 'auto', margin:'auto', top:0, bottom:0, right:0, left:0, background:'red', opacity:.2, zIndex:-1,overflowX:'hidden'}}/>
            </div>
            <LandingSection/>
            
            <BackgroundMerahDiv>
                <div style={{position:'flex', width:'100%', flexDirection:'column', justifyContent:'flex-start'}}>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', maxWidth:'100%'}}>
                    <AboutUsPage {...homeObjOne}/>
                </div>
                <Milestone {...homeObjOne} style={{width:'100%'}}/>
                </div>
                <div style={{position:'absolute', right:'',width:'100%', height:'200%', zIndex:-1}}>
                    <img src={bgMerah} style={{maxWidth:'100%'}} style={{zIndex:'-1' ,objectFit:'cover', position:'absolute', width:'100%', height:'250vh'}}/>
                </div>
            </BackgroundMerahDiv>
            <Visimisi/>
            <HowWeWork/>
            <OurClients/>
            {/* <CustomInfoSection {...homeObjTwo}/>
            <CustomInfoSection {...homeObjThree}/>
            <InfoSection {...homeObjThree} style={{zIndex:1}}/>
            <InfoSection {...homeObjFour} /> */}
            <ContactUsSection/>
            <Footer/>
            {/* <div style={{position:'flex',height:'200px', width:'auto'}}></div> */}
        </div>
    )
}

export const VideoBg = styled.video`
    top:0;
    bottom:0;
    left:0;
    right:0;
    align-self: center;
    -o-object-fit: cover;
    object-fit: fill;
    opacity: 0.7;
`

const BackgroundMerahDiv = styled.div`
    background: 'red';
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: '200vh';
    max-width: 100vw;
    /* @media screen and (max-width: 768px) {
    width: 120;
  } */
`
const ImageBgMerah = styled.img`
    display: flex;
    z-index: -1;
    height:'200vh';
    width: auto;
    max-width: 100%;
    /* width:100%; */
    /* height: 100vh; */
    object-fit: fill;



    
`

export default Home
