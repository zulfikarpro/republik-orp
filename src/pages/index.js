import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'
import ContactUsSection from '../component/ContactUsSection';
import Footer from '../component/Footer';
import HomePage from '../component/Home';
import AboutUsPage from '../component/AboutUs';
import WhatWeDO from '../component/WhatWeDo/Index';
import Partnership from '../component/Partnership/Index';
import OurProducts from '../component/OurProducts/Index';
import bgvideo from '../videos/bgvideo.mp4'
import OurTarget from '../component/OurTarget';


const Home = () => {
    const [isMobile, setIsmobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleResize = () => {
        if(window.innerWidth<720){
            setIsmobile(true)
        }else{
            setIsmobile(false)
        }
    }
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{window.addEventListener('resize', handleResize)})



    return (
            <div style={{minWidth:'100%', display:'flex', flexDirection:'column', maxWidth:'100vw', fontFamily:'Exo2'}}>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
                <div style={{position:'fixed', top:'-50%', left:'', width:'200vw', height:'200%', }}>
                    <video style={{position: 'fixed', height:'100vh', width: '100vw',right:'0', top:0, bottom:0, left:0, margin:'auto', zIndex:-4, overflowX:'hidden', opacity: 1, background:'black', objectFit:'cover', objectPosition:'center'}} autoPlay loop muted src={bgvideo} type='video/mp4'/>
                    <div style={{position:'fixed',height:'100vh', width: 'auto', margin:'auto', top:0, bottom:0, right:0, left:0, background:'white', opacity:.2, zIndex:-3,overflowX:'hidden'}}/>
                </div>
                <HomePage/>
                <AboutUsPage mobile={isMobile}/>
                {/* <OurProducts mobile={isMobile}/> */}
                <Partnership mobile={isMobile}/>
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

export default Home
