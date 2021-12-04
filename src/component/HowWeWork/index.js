import React from 'react'
import {Container, Title, RowWrapper, LeftColumn, RightColumn, ContentWrapper, HWWShadow, ImageLeft, ImageList, TitleShadow} from './HowWeWorkElements'
import bgImage from '../../images/bghww.jpg'
import warehouseimg from '../../images/warehousbg2x.png'
import img1 from '../../images/expertise/1.png'
import img2 from '../../images/expertise/2.png'
import img3 from '../../images/expertise/3.png'
import img4 from '../../images/expertise/4.png'
import img5 from '../../images/expertise/5.png'
import img6 from '../../images/expertise/6.png'
import img7 from '../../images/expertise/7.png'
import img8 from '../../images/expertise/8.png'
const HowWeWork = () => {
    return (
        <>
        <Container style={{marginTop:'60px', maxHeight:'100vh'}} style={{backgroundImage:`url(${bgImage})`}}  id={'menu3'} >
            {/* <BgImage src= {bgImage}/> */}
            <div style={{position:'fixed', right:'',top:'', width:'200vw', height:'200%', zIndex:-1}}>
                <img src={bgImage} style={{}}/>
            </div>
            <ContentWrapper>
                <div style={{display:'flex', flexDirection:'column', justifyContent: 'flex-start',marginTop:'10%', marginBottom:'0px'}}>
                    {/* <Title>Our Expertise</Title> */}
                    <TitleShadow>Our Expertise</TitleShadow>
                    
                    </div>
            <RowWrapper style={{maxWidth:'1440px', margin:'auto', marginTop:'20px'}}>
                <LeftColumn >
                    <ImageLeft src={warehouseimg}></ImageLeft>
                </LeftColumn>
                <RightColumn style={{margin:'auto'}} >
                    <ImageList src={img1}/>
                    <ImageList src={img2}/>
                    <ImageList src={img3}/>
                    <ImageList src={img4}/>
                    <ImageList src={img5}/>
                    <ImageList src={img6}/>
                    <ImageList src={img7}/>
                    <ImageList src={img8}/>
                </RightColumn>
            </RowWrapper>
            </ContentWrapper>
        </Container>
            
        </>
    )
}

export default HowWeWork
