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
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    homeObjFive
  } from '../component/InfoSection/Data';
import AboutUsPage from '../component/AboutUs';
import Milestone from '../component/Milestone';


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}


    return (
        <>
        <div>
            <div>
            <video style={{position: 'fixed' ,height:'1080px', width:'auto', zIndex:-40, overflow:'hidden', opacity: 1, background:'red'}} autoPlay loop muted src={Video} type='video/mp4'/>
            </div>
            <div style={{position:'fixed',height:'2000px', width:'100%', background:'red', opacity:.3, zIndex:-1}}>
                
            </div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LandingSection/>
            
            <BackgroundMerahDiv>
            {/* <div style={{position:'flex', width:'100%'}}> */}
            {/* <CustomInfoSection {...homeObjOne}/> */}
            <AboutUsPage {...homeObjOne}/>
            <Milestone {...homeObjOne}/>
            {/* </div> */}
            <ImageBgMerah src={bgMerah}/>
            </BackgroundMerahDiv>
            <Visimisi/>
            <CustomInfoSection {...homeObjTwo}/>
            <CustomInfoSection {...homeObjThree}/>
            <InfoSection {...homeObjThree} style={{zIndex:1}}/>
            <InfoSection {...homeObjFour} />
            <ContactUsSection/>
            <Footer/>
            <div style={{position:'flex',height:'200px', width:'auto'}}></div>
        </div>
            
        </>
    )
}

export const VideoBg = styled.video`
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:1920px;
    height:1080px;
    align-self: center;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 0.7;
`

const BackgroundMerahDiv = styled.div`
    background-image: bgMerah;
    display: flex;
    flex-direction: column;
`
const ImageBgMerah = styled.img`
z-index: -1;
    position:absolute;
    width:auto;
    height: auto;
    object-fit: contain;
`

export default Home
