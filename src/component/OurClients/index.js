import React from 'react'
import { Container, RowWrapper } from '../HowWeWork/HowWeWorkElements'
// import { TitleShadow } from '../Visimisi/VisimisiElements'
import {Title, ContentWrapper, TitleShadow, ImageList } from './OurClientsElements'
import img1 from '../../images/brand/abc.png'
import img2 from '../../images/brand/ahm.png'
import img3 from '../../images/brand/archroma.png'
import img4 from '../../images/brand/jasindo.png'
import img5 from '../../images/brand/mitsubishi.png'
import img6 from '../../images/brand/ot.png'
import img7 from '../../images/brand/pli.png'
import img8 from '../../images/brand/reckitt.png'
import img9 from '../../images/brand/tam.png'
import img10 from '../../images/brand/ultrajaya.png'
import img11 from '../../images/brand/unilever.png'
import img12 from '../../images/brand/yamah.png'
const OurClients = () => {
    return (
        <>
        <Container id={'ourclients'} style={{background:'white', paddingTop:'100px'}}>
        <ContentWrapper>
                <div style={{width:'100%', marginTop:'10%', display:'flex',flexDirection:'row'}}>
                    
                <Title style={{color:'#707070'}}>Our Clients</Title>
                    <TitleShadow>Our Clients</TitleShadow>
                </div>
            <RowWrapper>
                <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row', alignContent:'center',justifyContent:'space-evenly',alignSelf:'center'}}>
                    <div>
                    <ImageList src={img1}/>
                    </div><div>
                    <ImageList src={img2}/>
                    </div><div>
                    <ImageList src={img3}/>
                    </div><div>
                    <ImageList src={img4}/>
                    </div><div>
                    <ImageList src={img5}/>
                    </div><div>
                    <ImageList src={img6}/>
                    </div><div>
                    <ImageList src={img7}/>
                    </div><div>
                    <ImageList src={img8}/>
                    </div><div>
                    <ImageList src={img9}/>
                    </div><div>
                    <ImageList src={img10}/>
                    </div><div>
                    <ImageList src={img11}/>
                    </div><div>
                    <ImageList src={img12}/>
                    </div>
                </div>
                {/* <LeftColumn>
                    <ImageLeft src={warehouseimg}></ImageLeft>
                </LeftColumn>
                <RightColumn>
                    <ImageList src={img1}/>
                    <ImageList src={img2}/>
                    <ImageList src={img3}/>
                    <ImageList src={img4}/>
                    <ImageList src={img5}/>
                    <ImageList src={img6}/>
                    <ImageList src={img7}/>
                    <ImageList src={img8}/>
                </RightColumn> */}
            </RowWrapper>
            </ContentWrapper>
        </Container>
            
        </>
    )
}

export default OurClients