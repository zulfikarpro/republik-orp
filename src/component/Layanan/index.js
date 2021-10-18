import React, {useState, useEffect} from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bg from '../../images/bg/bglayanan.png'
import { Title } from '../AboutUs/AboutUsElement'
import logoecommerce from '../../images/logoecommerce.png'
import logodistributor from '../../images/logodistributor.png'
import { Nav, NavItem, NavMenu, NavLinks } from './LayananElements'
import lclbyair from '../../images/expertise/lclbyair.png'
import lclbysea from '../../images/expertise/lclbysea.png'
import fclbysea from '../../images/expertise/fclbysea.png'
import jasatitip from '../../images/expertise/jasatitiptransfer.png'
const Layanan = () => {
    const [imgSource, setImgSource] = useState(lclbysea)
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

    return (
        <>
          <Container>
              <ContentDiv style={{backgroundImage:`url(${bg})` , backgroundRepeat:'no-repeat',backgroundSize:'cover', backgroundPosition:'center', paddingLeft: '0px',paddingRight:' 0px'}}>
                <Title>Our Partners</Title>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', maxWidth:'960px',color:'#C0022D'}}>
                    <div style={{alignContent:'center', }}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                        <h2>E-Commerce Partners</h2>
                        </div>
                        <img src={logoecommerce} style={{width:'100%', maxWidth:'739px'}}/>
                    </div>
                    <div>
                        
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center' }}>
                        <h2>RetailDistribution</h2>
                        </div>
                        <img src={logodistributor} style={{width:'100%', maxWidth:'739px'}}/>
                    </div>
                </div>

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
                    <NavLinks >
                    Jasa titip Transfer
                    </NavLinks>
                </NavItem>
                </NavMenu>
                </Nav>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}></div>
                <img src={imgSource} alt='expertise' style={{width:'100%', height:'auto'}}/>
              </ContentDiv>
            </Container>  
        </>
    )
}

export default Layanan
