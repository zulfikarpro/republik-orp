import React, {useState} from 'react'
import styled from 'styled-components';
import Navbar from '../component/Navbar'
import Sidebar from '../component/sidebar'
import ContactUsSection from '../component/ContactUsSection';
import Footer from '../component/Footer';
import HomePage from '../component/Home'
import AboutUsPage from '../component/AboutUs'
import Layanan from '../component/Layanan'
import KelasImport from '../component/Kelas'
import Kepuasan from '../component/KepuasanPelanggan'
import logoWa from '../images/logowa.png'


const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}


    return (
        <div style={{minWidth:'100%'}}>
            <DivWa>
                <a href={'https://wa.me/628119933501'}>
                <Img src={logoWa}></Img>
                </a>
                </DivWa>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomePage/>
            <AboutUsPage/>
            <Layanan/>
            <KelasImport/>
            <Kepuasan/>
            <ContactUsSection/>
            {/* <Footer/> */}
            
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

export const DivWa = styled.div`
    position:fixed;
    margin-left: 10vw;
    margin-bottom: 2%;
    padding:10px;
    border-radius: 60px;
    background:#fffff0;
    width: 60px;
    height: auto;
    bottom:0;
    z-index: 5;

    @media screen and (max-width:960px){
        margin-left: 5px;
        width: 40px;
        height: 40px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    position: center;
    @media screen and(max-width:960px){
        /* width: 100%;
        height:100%; */
        /* height:auto; */
    }
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
