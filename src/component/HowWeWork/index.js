import React from 'react'
import {Container, Title, RowWrapper, LeftColumn, RightColumn, ContentWrapper, HWWShadow, ImageLeft, ImageList, BgImage} from './HowWeWorkElements'
import bgImage from '../../images/ourexpertisebg2x.png'
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
        <Container id={'menu3'} style={{marginTop:'60px'}}>
            {/* <BgImage src= {bgImage}/> */}
            <div style={{position:'absolute', right:'', marginTop:'70%',width:'200vw', height:'200%', zIndex:-1}}>
                <img src={bgImage} style={{}}/>
            </div>
            <ContentWrapper>
                <div style={{paddingTop:'50px',width:'100%', display:'flex',flexDirection:'row-reverse'}}>
                    <HWWShadow>How We Work</HWWShadow>
                    <Title>Our Expertise</Title>
                </div>
            <RowWrapper>
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
