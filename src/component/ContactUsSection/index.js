import React, {useState} from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bg from '../../images/bg/bgregister.png'
import { Title } from '../AboutUs/AboutUsElement'
import logoWa from '../../images/logowa.png'
const ContactUsSection = () => {
    const [alreadyHave, setAlreadyHave] = useState('');
    const submit = () => {
        const name = document.getElementsByClassName('name')[0].value
        const storeName = document.getElementsByClassName('storeName')[0].value
        const email = document.getElementsByClassName('email')[0].value
        const address = document.getElementsByClassName('address')[0].value
        const isHave = alreadyHave

        if(!name || !storeName || !email || !address || !isHave){
            alert('Lengkapi Data Anda')
        }
    }

    return (
        <>
        <Container style={{marginTop:'0px'}} id="contactus">
        <ContentDiv style={{backgroundImage:`url(${bg})`, backgroundSize:'cover', paddingBottom:'5vh', paddingTop: '5vh', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row', background:'white', padding: '5vh',}}>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    <h2 style={{color:'#C0022D'}}>REGISTER MEMBER / JOIN US</h2>
                    <p style={{fontSize:'.8rem'}}>Ninja akan membagikan pengalaman dan informasi segala hal yang berhubungan dengan pembelian import dan sebagai nya dan sebagai nya</p>
                    <p>Nama Lengkap</p>
                    <input style={{padding:'5px' ,}} className='name'/>
                    <p>Nama Toko / Online store / Perusahaan</p>
                    <input style={{padding:'5px' ,}}className='storeName'/>
                    <p>Alamat E-mail</p>
                    <input style={{padding:'5px' ,}}className='email'/>
                    <p>Lokasi (Nama Kota)</p>
                    <input style={{padding:'5px' ,}}className='address'/>
                    <p>Pernahkah Anda melakukan pembelian dari luar negeri sebelumnya?)</p>
                    <tr>
                        <td><input type="radio" name="ishave" onClick={()=>setAlreadyHave('true')}/>Ya</td>
                        
                        <td><input type="radio" name="ishave" onClick={()=>setAlreadyHave('false')}/>Tidak</td>
                    </tr>
                    <div onClick={()=>submit()}style={{background:'#C0022D', borderRadius:'16px', width:'200px', color:'#fff', textAlign:'center', padding: '10px', marginTop:'20px'}}>Submit</div>
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                <Title>Atau</Title>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <p style={{justifyContent:"center", textAlign:'center'}}>Hubungi kontak representatif<br/> kami di :</p>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <img src={logoWa}></img>
                </div>
                <h1 style={{textAlign:'center'}}>0811-9933-501</h1>
                </div>
            </div>
            </ContentDiv>
        </Container>
        </>
    )
}

export default ContactUsSection
