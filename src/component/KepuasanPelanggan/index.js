import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bgKepuasan from '../../images/bg/bgkepuasan.png'
import { Title } from '../AboutUs/AboutUsElement'
import {TextBox, CarouselContainer, P} from './KepuasanElements'
import Carousel from 'react-material-ui-carousel'

const Kepuasan = () => {
    return (
        <>
          <Container id='testimoni' style={{marginTop:'0px'}}>
              <ContentDiv style={{color:'#fff',background:`url(${bgKepuasan})`,backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat: 'no-repeat', width:'100%'}}>
                <Title style={{color:'#fff'}}>Kepuasan Pelanggan</Title>
                <CarouselContainer>

                <Carousel>
                    <TextBox style={{background:'white', borderRadius:'10px', maxWidth:'620px', margin:'auto'}}>
                        <P style={{padding: '40px',color:'#000'}}>Dear Ninja Team, <br/>
i feel that you guys are far beyond than just being my forwarder. Saya kenal Ninja kurang lebih 4 bulan  dan super duper tebantu denggan semua layanan Ninja.<br/><br/>

Pengalaman yang super berkesan adalah bagaimana Ninja Team merubah kondisi yang semula minus nyari 22 juta. turun ke minus 16 juta, lalu berubah menjadi profit puluhan juta rupiah dalam produk toaster machine!<br/>
Amazing right? Dan itu kenyataan.<br/><br/>

Dengan layanan Find for You, Ninja Team berkolaborasi dengan tim purchasing China memastikan agar saya mendapatkan barang yang sama, dan dengan harga yang jauh lebih murah dari agen purcashing saya yang sudah saya gunaka bertahun - tahun.<br/><br/>

Terima kasih Ninja Team, Semoga kalian sehat terus. Salam Sukses<br/><br/><br/>
Miss C, Jakarta
</P>
                    </TextBox>
                    <TextBox style={{background:'white', borderRadius:'10px', maxWidth:'620px', margin:'auto'}}>
                        <P style={{padding: '40px',color:'#000'}}>Salam Hangat Ninja Team,<br/>
Saya sudah menjalankan kurang lebih 9 shipment dengan Ninja selama 4-5 bulan ini.<br/>
Yang mengherankan adalah, rate delay nya ampun, pengen nangis, hampir tidak pernah terjadi !!!!<br/>
Yang ada malah : percepatan barang tiba di Gudang Ninja Jakarta, saya pernah ngalamin barang lebih cepat 2 minggu dari ETA awal, WAW !<br/><br/>

Sebagai seorang ibu rumah tangga/ pelaku onlineshop kecil - kecilan, percepatan dan tepat waktu ETA ini adalah value yang maha penting agar costumer trust ke saya tetap terjaga, dan yang penting, cashflow saya aman karena barang - barang cepat tiba, uang nya bisa saya gunakan belanja lagi barang - barang lain nya<br/><br/>

Terima kasih Ninja Team.<br/>
Sehat terus ya, biar bisa merajai Dunia Import Indonesia.<br/><br/><br/>
Cici C, Jakarta
</P>
                    </TextBox>
                </Carousel>
                
                </CarouselContainer>
              </ContentDiv>
              </Container>  
        </>
    )
}

export default Kepuasan
