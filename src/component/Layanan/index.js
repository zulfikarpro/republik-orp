import React, {useState, useEffect} from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bg from '../../images/bg/bglayanan.png'
import { Title } from '../AboutUs/AboutUsElement'
import logoecommerce from '../../images/logoecommerce.png'
import logodistributor from '../../images/logodistributor.png'
import { Nav, NavItem, NavMenu, NavLinks, GridView } from './LayananElements'
import lclbyair from '../../images/expertise/lclbyair.png'
import lclbysea from '../../images/expertise/lclbysea.png'
import fclbysea from '../../images/expertise/fclbysea.png'
import jasatitip from '../../images/expertise/jasatitiptransfer.png'
import LclBySea from './lclbysea'
import LclByAir from './lclbyair'
import FclBySea from './fclbysea'
import JasaTitip from './jasatitip'
const Layanan = () => {
    const [imgSource, setImgSource] = useState(lclbysea)
    const [carousel, setCarousel] = useState('lclBySea')
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
        document.getElementsByClassName("tab")[0].background= '#fff'
        document.getElementsByClassName('tab')[1].background='#C0022D'
        document.getElementsByClassName('tab')[2].background='#C0022D'
        document.getElementsByClassName('tab')[3].background='#C0022D'
        document.getElementsByClassName("tab")[0].style.color='#C0022D'
        document.getElementsByClassName("tab")[1].style.color='#fff'
        document.getElementsByClassName("tab")[2].style.color='#fff'
        document.getElementsByClassName("tab")[3].style.color='#fff'
      },[]);
    //   const ChangeColor
    const ChangeColor = (e) =>{
        switch(e){
            case 1:
                setImgSource(lclbysea)
                setCarousel('lclBySea')
            document.getElementsByClassName("tab")[0].style.background='#fff'
            document.getElementsByClassName("tab")[0].style.color='#C0022D'
            document.getElementsByClassName("tab")[1].style.background='#C0022D'
            document.getElementsByClassName("tab")[2].style.background='#C0022D'
            document.getElementsByClassName("tab")[3].style.background='#C0022D'
            document.getElementsByClassName("tab")[1].style.color='#fff'
            document.getElementsByClassName("tab")[2].style.color='#fff'
            document.getElementsByClassName("tab")[3].style.color='#fff'
            break;
            case 2:
                setImgSource(lclbyair)
                setCarousel('lclByAir')
                document.getElementsByClassName("tab")[0].style.background='#C0022D'
                document.getElementsByClassName("tab")[1].style.background='#fff'
                document.getElementsByClassName("tab")[1].style.color='#C0022D'
                document.getElementsByClassName("tab")[2].style.background='#C0022D'
                document.getElementsByClassName("tab")[3].style.background='#C0022D'
                document.getElementsByClassName("tab")[0].style.color='#fff'
                document.getElementsByClassName("tab")[2].style.color='#fff'
                document.getElementsByClassName("tab")[3].style.color='#fff'
            break;
            case 3:
                setImgSource(fclbysea)
                setCarousel('fclBySea')
                document.getElementsByClassName("tab")[0].style.background='#C0022D'
                document.getElementsByClassName("tab")[1].style.background='#C0022D'
                document.getElementsByClassName("tab")[2].style.background='#fff'
                document.getElementsByClassName("tab")[2].style.color='#C0022D'
                document.getElementsByClassName("tab")[3].style.background='#C0022D'
                document.getElementsByClassName("tab")[0].style.color='#fff'
                document.getElementsByClassName("tab")[1].style.color='#fff'
                document.getElementsByClassName("tab")[3].style.color='#fff'
            break;
            case 4:
                setImgSource(jasatitip)
                setCarousel('jasaTitip')
                document.getElementsByClassName("tab")[0].style.background='#C0022D'
                document.getElementsByClassName("tab")[1].style.background='#C0022D'
                document.getElementsByClassName("tab")[2].style.background='#C0022D'
                document.getElementsByClassName("tab")[3].style.background='#fff'
                document.getElementsByClassName("tab")[3].style.color='#C0022D'
                document.getElementsByClassName("tab")[0].style.color='#fff'
                document.getElementsByClassName("tab")[2].style.color='#fff'
                document.getElementsByClassName("tab")[1].style.color='#fff'
            break;

            default:
        }
    }


    const CarouselOption = () =>{
        switch(carousel){
            case 'lclBySea':
            return<LclBySea/>
            case 'lclByAir':
            return<LclByAir/>
            case 'fclBySea':
            return<FclBySea/>
            case 'jasaTitip':
            return<JasaTitip/>
            
        default:
        }
    }

    return (
        <>
          <Container style={{marginTop:'0px'}}>
              <ContentDiv style={{backgroundImage:`url(${bg})` , backgroundPosition:'center' ,backgroundSize:'cover', backgroundRepeat:'no-repeat' ,paddingBottom:'5vh', paddingTop:'5vh',width:'100vw', minHeight:'400px'}}>
                <Title>Our Partners</Title>
                <GridView  style={{margin:'auto'}}>
                    <div style={{alignContent:'center'}}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                        <h2>E-Commerce Partners</h2>
                        </div>
                        <img src={logoecommerce} style={{width:'100%', maxWidth:'739px'}}/>
                    </div>
                    <div>
                        
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                        <h2>RetailDistribution</h2>
                        </div>
                        <img src={logodistributor} style={{width:'100%', maxWidth:'739px', margin:'auto'}}/>
                    </div>
                </GridView>

                <div style={{display:'flex', flexDirection:'row', width:'100%', background:'#C0022D', color:'#fff', justifyContent:'center',}}>
                    <div style={{display:'flex', flexDirection:'column', margin:'10%'}}>
                    <h2 style={{alignSelf:'center', }}>Misi Kami</h2>
                    <p style={{alignSelf:'center', textAlign:'center'}}>
                    Menghubungkan Asia Tenggara ke dunia berbagai kemungkinan, satu pengiriman yang menyenangkan secara sekaligus
                    </p>
                    </div>
                </div>

                <div  id='layanan' style={{display:'flex', flexDirection:'column', marginTop:'5%'}}>
                    <Title>Kami Ahlinya Dalam Bidang Ini</Title>
                </div>
                <Nav>    
                <NavMenu>
                <NavItem className="tab" onClick={()=>{ChangeColor(1)}} style={{background:'#fff', color:'#C0022D' ,borderRadius:' 20px 0px 0px 20px'}}>
                    <NavLinks >
                    <b>LCL</b>&nbsp;by Sea
                    </NavLinks>
                </NavItem>
                
                <NavItem className="tab" onClick={()=>{ChangeColor(2)}} >
                    <NavLinks >
                    <b>LCL</b> &nbsp; by Air
                    </NavLinks>
                </NavItem>
                
                <NavItem className="tab" onClick={()=>{ChangeColor(3)}} >
                    <NavLinks >
                    <b>FCL</b> &nbsp; by Sea
                    </NavLinks>
                </NavItem>
                <NavItem className="tab" onClick={()=>{ChangeColor(4)}} style={{borderRadius:' 0px 20px 20px 0px',}}>
                    <NavLinks style={{maxWidth:'100%'}} >
                    <p style={{maxWidth:'100%'}}>Jasa&nbsp;<b>TITIP</b><br/>Transfer</p>
                    </NavLinks>
                </NavItem>
                </NavMenu>
                </Nav>
                <div style={{display:'flex', flexDirection:'row', minHeight:'500px', justifyContent:'center'}}>
                {/* <img src={imgSource} alt='expertise' style={{width:'100%', height:'auto'}}/> */}
                {CarouselOption()}
                </div>
              </ContentDiv>
            </Container>  
        </>
    )
}

export default Layanan
