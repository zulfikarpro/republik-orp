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


const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const handleResize = () => {
    if (window.innerWidth < 960) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

const toggle = () =>{
    setIsOpen(!isOpen);
}

useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

//   if(!isMobile){
    return (
        <div style={{maxWidth:'96vw', display:'flex', flexDirection:'column'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <LandingSection/> */}
            <HomePage mobile={isMobile}/>
            <AboutUsPage mobile={isMobile}/>
            <WhatWeDO mobile={isMobile}/>
            <Partnership/>
            <OurProducts/>
            <ContactUsSection mobile={isMobile}/>
        </div>
    )
//   }else{
//       return(
//       <div style={{display:'flex', flexDirection:'column', width:'100%', height:'100%', textAlign:'center'}}>
//           <h1>404 Unknown</h1>

//       </div>)
//   }
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
