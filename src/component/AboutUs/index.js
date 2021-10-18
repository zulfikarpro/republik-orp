import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import { Title, Paragraph} from './AboutUsElement'
// import { TopLine, Subtitle, Heading,} from '../InfoSection/InfoElements'
import Carousel from 'react-material-ui-carousel'
import bgaboutus from "../../images/bg/bgaboutus.png"
import MainBanner from '../../images/MainBanner.png'
import foto1 from '../../images/carousel/foto1.png'
import foto2 from '../../images/carousel/foto2.png'
import foto3 from '../../images/carousel/foto3.png'
import foto4 from '../../images/carousel/foto4.png'
import foto5 from '../../images/carousel/foto5.png'

const AboutUsPage = ({
    lightBg,
    imgStart,
    topLine,
    lightText,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    id,
    primary,
    darkText,
    dark,
    dark2,
    alignCenter,
    bgImage
  }) => {
    var items = [
      {
          pic: foto1
      },
      {
          pic: foto2
      },
      {
          pic: foto3
      },
      {
          pic: foto4
      },
      {
          pic: foto5
      },
  ]

    return (
        <>
            <Container id={'aboutus'} page='aboutus'>
                <ContentDiv style={{backgroundImage:`url(${bgaboutus})`, backgroundSize:'cover', paddingBottom:'5vh', paddingTop:'5vh'}}>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <Title>
                    Kami tuntaskan masalah
pengiriman paket Anda
                    </Title>
                    <Paragraph>
                    Ninja adalah perusahaan pengiriman ekspres berbasis teknologi yang menyediakan layanan pengiriman tanpa repot untuk bisnis dari semua ukuran di Asia Tenggara. Diluncurkan pada tahun 2014, Ninja memulai operasinya di Singapura dan telah menjadi perusahaan pengiriman terbesar dan tercepat di kawasan ini, dengan jaringan yang mencakup enam negara di Asia Tenggara - Singapura, Malaysia, Filipina, Indonesia, Thailand, dan Vietnam.
                    </Paragraph>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <Carousel>
                    {
                        items.map((item)=> <img src={item.pic} style={{maxHeight:'400px', height:'auto', width:'auto', alignSelf:'center' }}/>)
                    }
                    </Carousel>
                    </div>
                  </div>
                </ContentDiv>
            </Container>
        </>
    )
}

export default AboutUsPage
