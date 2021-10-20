import React, {useState} from 'react'
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


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}


    return (
            <div style={{minWidth:'100%', display:'flex', flexDirection:'column'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <LandingSection/> */}
            <HomePage/>
            <AboutUsPage/>
            <WhatWeDO/>
            <Partnership/>
            <OurProducts/>
            <ContactUsSection/>
            {/* <Footer/> */}
            <div style={{position:'flex',height:'200px', width:'auto'}}></div>
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
