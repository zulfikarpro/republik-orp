import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'
import ContactUsSection from '../component/ContactUsSection';
import Footer from '../component/Footer';
import FacilitiesPage from '../component/Facilities'
import HomePage from '../component/Home';
import AboutUsPage from '../component/AboutUs';
import ProjectsPage from '../component/Projects';


const Home = () => {
const [isMobile, setIsMobile] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const handleResize = () => {
    if (window.innerWidth < 1080) {

    // alert(window.innerWidth)
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
        <div style={{minWidth:'100%', display:'flex', flexDirection:'column'}}>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} mobile={isMobile}/>
            {/* <LandingSection/> */}
            <HomePage mobile={isMobile}/>
            <AboutUsPage mobile={isMobile}/>
            <FacilitiesPage/>
            <ProjectsPage/>
            <ContactUsSection mobile={isMobile}/>
            {/* <Footer/> */}
            {/* <div style={{position:'flex',height:'200px', width:'auto'}}></div> */}
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
