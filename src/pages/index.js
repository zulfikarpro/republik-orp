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
        <>
            <div style={{position:'absolute', top:'-50%', left:'-50%', width:'100vw', height:'200%'}}>
                <video style={{position: 'fixed', height:'100vh', width: '100%',right:'0', top:0, bottom:0, left:0, margin:'auto', zIndex:-4, overflow:'hidden', opacity: 1, background:'black'}} autoPlay loop muted src={Video} type='video/mp4'/>
                <div style={{position:'fixed',height:'100vh', width: 'auto', margin:'auto', top:0, bottom:0, right:0, left:0, background:'red', opacity:.2, zIndex:-1,overflowX:'hidden'}}/>
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LandingSection/>
            
            <BackgroundMerahDiv>
                {/* <div style={{position:'flex', width:'100%'}}> */}
                {/* <CustomInfoSection {...homeObjOne}/> */}
                <AboutUsPage {...homeObjOne}/>
                <Milestone {...homeObjOne} style={{width:'100%'}}/>
                {/* </div> */}
                <ImageBgMerah src={bgMerah}/>
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
            <div style={{position:'flex',height:'200px', width:'auto'}}></div>
        </>
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
    width: auto;
    /* @media screen and (max-width: 768px) {
    width: 120;
  } */
`
const ImageBgMerah = styled.img`
z-index: -1;
    position:absolute;
    height:'200vh';
    width: auto;
    /* width:100%; */
    /* height: 100vh; */
    object-fit: fill;



    
`

export default Home
