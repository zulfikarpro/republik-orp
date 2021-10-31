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
import { ImageIcon, DivItemRow, DivArrow, ArrowLeft, ArrowRight, LineSpan, Number, BoldTitle, Arrow, ContainerDiv } from './LayananElements'

const LclBySea = () => {
    const [windowSize, setWindowSize] = React.useState(0)

    const arrow = () =>{
        let maxLine = 8;
        
        if(windowSize <582 )
        return (
        <Arrow>
            {/* for(i=0; i<maxLine; i++){ */}

            {/* } */}
        </Arrow>
        )
    }
    
    const handleResize = () =>{
        setWindowSize(window.innerWidth)
    }
    
    
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
      })



    return (
        <ContainerDiv>
            <div className='column1' style={{display:'flex', flexDirection:'column', maxWidth:'25%', marginTop:'5%'}}>
                <DivItemRow style={{}}>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto'}}>
                        <Number>1</Number>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Proses Picking</b><br/><b style={{fontWeight:'200'}}>Oleh Suplier China</b></BoldTitle>
                        </div>
                    </div>
                    <ImageIcon src={icon1}  />
                </DivItemRow>
                <DivItemRow style={{marginTop:'25%'}}>
                    <ImageIcon src={icon2}  />
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto', textAlign:'left', maxWidth:'200px'}}>
                    <Number>3</Number>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Gudang Jakarta</b><br/><b style={{fontSize:'.8rem',fontWeight:'200'}}>Barang diterima di gudang Ninja Direct di Jakarta</b></BoldTitle>
                        </div>
                    </div>
                </DivItemRow>
            </div>
            <div className='column2' style={{display:'flex', flexDirection:'column', margin:'auto', width:'50%'}}>
                <DivItemRow style={{maxWidth:'400px', margin:'auto'}}>
                    <ImageIcon src={icon10}  style={{maxHeight:'80px',width:'auto', height:'auto', margin:'auto'}}/>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D', textAlign:'center',justifyContent:'center', margin:'auto'}}>
                        
                    <Arrow>{'-----'}</Arrow>
                    <div style={{maxWidth:'200px', width:'40%',display:'flex', flexDirection:'row',justifyContent:'center',background: 'white', borderRadius:'20px',paddingLeft:'10px', paddingRight:'10px', magrin:'auto', boxShadow:'5px 5px #888888' }}>
                            <h3 style={{fontSize:'.6rem', lineHeight:'1.2', margin:'auto'}}><b style={{fontWeight:'600'}}>Barang diantar menuju gudang Ninja Direct di China</b></h3>
                    </div>
                        <Arrow>{'----->'}</Arrow>
                    </div>
                </DivItemRow>
                <DivItemRow style={{maxWidth:'400px', color:'#C0022D', margin:'auto'}} className='imagecenter'>

                    <div style={{height:'40px', width:'100%'}}></div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Arrow style={{margin:'auto'}}>{'<----'}</Arrow>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', maxWidth:'60%'}}>
                            <img src={icon8} style={{maxWidth:'140px',width:'80%', margin:'auto'}} />
                            <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto', textAlign:'center'}}>                                
                                {/* <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}> */}
                                    <h3 style={{fontSize:'.8rem', lineHeight:'0'}}><b style={{fontWeight:'900'}}>LCL by Sea</b><br/></h3>
                                {/* </div> */}
                            </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <Arrow style={{margin:'auto'}}>{'----'}</Arrow>
                        </div>
                    </div>
                </DivItemRow>
                <DivItemRow style={{maxWidth:'400px', margin:'auto'}}>
                    <ImageIcon src={icon11}  style={{maxHeight:'80px', width:'auto', height:'auto', margin:'auto'}}/>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D', textAlign:'center',justifyContent:'center'}}>
                    
                    <Arrow>{'-----'}</Arrow>
                    <div style={{maxWidth:'200px',  width:'40%', display:'flex', flexDirection:'row',justifyContent:'center',background: 'white', borderRadius:'20px',paddingLeft:'10px', paddingRight:'10px', magrin:'auto', boxShadow:'5px 5px #888888' }}>
                            <h3 style={{fontSize:'.6rem', lineHeight:'1.2', margin:'auto'}}><b style={{fontWeight:'600'}}>Pembayaran Diterima</b></h3>
                    </div>
                        <Arrow>{'----->'}</Arrow>
                    </div>
                </DivItemRow>
            </div>
            
            <div className='column3' style={{display:'flex', flexDirection:'column', marginTop:'20%', maxWidth:'25%'}}>
                <DivItemRow style={{}}>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto', textAlign:'right'}}>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <BoldTitle><b style={{fontWeight:'900'}}>Gudang China</b><br/><b style={{fontWeight:'200'}}>Barang diterima di gudang Ninja Direct di China</b></BoldTitle>
                        </div>
                        <Number>2</Number>
                    </div>
                    <ImageIcon src={icon4}  />
                </DivItemRow>
                <DivItemRow style={{}}>
                    <ImageIcon src={icon5}  />
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D',margin:'auto', textAlign:'right'}}>
                        <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
                            <h3 style={{fontSize:'.8rem', lineHeight:'1.2'}}><b style={{fontWeight:'900'}}>Barang Sampai</b><br/><b style={{fontWeight:'200'}}>Barang tiba di Rumahmu</b></h3>
                        </div>
                        <Number>4</Number>
                    </div>
                </DivItemRow>
                {/* <div style={{display:'flex', flexDirection:'column', width:'200px'}}>
                    <ImageIcon src={icon3} style={{maxHeight:'120px'}}/>
                    <div style={{display:'flex', flexDirection:'row', height:'auto', width:'auto', color:'#C0022D', textAlign:'center',background: 'white', borderRadius:'20px', boxShadow:'5px 5px #888888' ,margin:'auto'}}>
                        <div style={{display:'flex', flexDirection:'row',justifyContent:'center', paddingLeft:'10px', paddingRight:'10px'}}>
                            <h3 style={{fontSize:'1rem', lineHeight:'1.2'}}><b style={{fontWeight:'600'}}>Barang diantar menuju gudang Ninja Direct di China</b></h3>
                        </div>
                    </div>
                </div> */}
            </div>
        </ContainerDiv>
    )
}

export default LclBySea
