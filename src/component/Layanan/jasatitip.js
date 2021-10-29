import React from 'react'
import icon1 from './icon_layanan/icon-01.png'
import icon2 from './icon_layanan/icon-02.png'
import icon3 from './icon_layanan/icon-03.png'
import icon4 from './icon_layanan/icon-04.png'
import icon5 from './icon_layanan/icon-05.png'
import icon6 from './icon_layanan/icon-06.png'
import icon7 from './icon_layanan/icon-07.png'
import icon8 from './icon_layanan/icon-08.png'
import icon9 from './icon_layanan/icon-09.png'
import icon10 from './icon_layanan/icon-10.png'
import icon11 from './icon_layanan/icon-11.png'
import icon12 from './icon_layanan/icon-12.png'
import icon13 from './icon_layanan/icon-13.png'
import { ImageIcon, DivItemRow, DivArrow, ArrowLeft, ArrowRight, LineSpan, Number, BoldTitle, Arrow } from './LayananElements'


const JasaTitip = () => {
    return (
    <div style={{maxWidth:'600px', width:'100vw', display:'flex', flexDirection:'row', justifyContent:'center',margin:'auto'}}>
            <div className='column1' style={{display:'flex', flexDirection:'column', maxWidth:'20%', marginTop:'5%'}}>
                <DivItemRow style={{}}>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto'}}>
                        <Number>1</Number>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Customer</b><br/><b style={{fontWeight:'200'}}>Pembayaran Menggunakan Rupiah</b></BoldTitle>
                        </div>
                    </div>
                    <ImageIcon src={icon3}  />
                </DivItemRow>
            </div>
            <div className='column1' style={{display:'flex', flexDirection:'column',justifyContent:'center', maxWidth:'60%', marginTop:'5%'}}>    
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto'}}>
                    <Arrow style={{margin:'auto', textAlign:'right'}}>{'-----'}</Arrow>
                    <DivItemRow style={{}}>
                        {/* <Number>1</Number>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Proses Picking</b><br/><b style={{fontWeight:'200'}}>Oleh Suplier China</b></BoldTitle>
                        </div> */}

                    <ImageIcon src={icon9}  />
                    </DivItemRow>
                <Arrow style={{margin:'auto', textAlign:'left'}}>{'----->'}</Arrow>
                    </div>
            </div>
            <div className='column1' style={{display:'flex', flexDirection:'column', maxWidth:'20%', marginTop:'5%'}}>
                <DivItemRow style={{}}>
                    <ImageIcon src={icon6}  />
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto'}}>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Supplier China</b><br/><b style={{fontWeight:'200'}}>Pembayaran Diteruskan Menggunakan RMB(Yuan)</b></BoldTitle>
                        </div>
                        <Number>2</Number>
                    </div>
                </DivItemRow>
            </div>
    </div>
    )
}

export default JasaTitip
