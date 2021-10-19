import React, {useState} from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bg from '../../images/bg/bgregister.png'
import { Title } from '../AboutUs/AboutUsElement'
import logoWa from '../../images/logowa.png'
import {GridView} from './ContactUsElement'
import axios from 'axios'
const ContactUsSection = () => {
    const [alreadyHave, setAlreadyHave] = useState('');
    const submit = () => {
        const name = document.getElementsByClassName('name')[0].value
        const storeName = document.getElementsByClassName('storeName')[0].value
        const email = document.getElementsByClassName('email')[0].value
        const address = document.getElementsByClassName('address')[0].value
        const isHave = alreadyHave
        if(!name || !storeName || !email || !address || !isHave){
            return alert('Lengkapi Data Anda');
        }

        const request = postApi(name, storeName, email, address, isHave);
        if(request.status===200){
            return alert('success')
        }else{
            return alert('error 502')
        }

    }

    const postApi = async (name, storeName, email, address, isHave) =>{
        const url = 'http://172.104.53.17/submit'
        const request = await axios.post(url, {name,storeName,email,address,isHave })
        return request;
    }

    return (
        <>
        <Container style={{marginTop:'0px'}} id="contactus">
        <ContentDiv style={{backgroundImage:`url(${bg})`, backgroundSize:'cover', paddingBottom:'5vh', paddingTop: '5vh', width:'100%'}}>
            <GridView >
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
                <a href={'https://wa.me/628119933501'}>
                <img src={logoWa}></img>
                </a>
                </div>
                <h1 style={{textAlign:'center'}}>0811-9933-501</h1>
                </div>
            </GridView>
            
            <p style={{color:'#fff', textAlign:'center', fontSize:'.8rem'}}>© 2021 Ninja Direct, PT KILAU ANANDA BUANA, All rights reserved. Ninja Direct WhatsApp : 0811-9933-501</p>
            </ContentDiv>
        </Container>
        </>
    )
}

export default ContactUsSection
