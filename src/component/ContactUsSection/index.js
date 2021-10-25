import React, {useState} from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import bg from '../../images/bg/bgregister.png'
import { Title } from '../AboutUs/AboutUsElement'
import logoWa from '../../images/logowa.png'
import {GridView} from './ContactUsElement'
import axios from 'axios'
const ContactUsSection = () => {
    const [alreadyHave, setAlreadyHave] = useState('');
    const envName = 'production'
    const config = require('../../config.json')[envName];
    const url = config.url;
    const submit = () => {
        // console.log(url)
        const name = document.getElementsByClassName('name')[0].value
        const storeName = document.getElementsByClassName('storeName')[0].value
        const email = document.getElementsByClassName('email')[0].value
        const address = document.getElementsByClassName('address')[0].value
        const isHave = alreadyHave
        const phone = document.getElementsByClassName('telpon')[0].value
        

        const headers = {"Access-Control-Allow-Origin": "*"}
        const data = {name:name,store_name:storeName,phone:phone,email:email,city:address,isHave}
        // if(!inputChecker(data)){
        //     return alert('Lengkapi Data Anda');
        // }
        const checker = inputChecker(data)
        if(!inputChecker(data)){
            return alert('Periksa kembali data anda')
        }
        axios.post(url+'submit', data, {headers} ).then((res)=>{
            console.log(res.data.statusCode)
            if(res.data.statusCode===200){
                alert('success')
                window.location.reload();
            }else{
                alert(res.data.message)
            }
        })

    }

    const inputChecker = (data)=>{
        const {name,store_name,phone,email,city,isHave} = data
        var nameChecker = true
        var storeNameChecker = true
        var emailChecker = true
        var phoneChecker = true
        var cityChecker = true
        var isHaveChecker = true 
        if(!name){
            changeBorderColor('name', false)
            nameChecker = false 
        }
        if(!store_name){
            changeBorderColor('storeName', false)
            storeNameChecker = false
        }

        if(!email.includes('@')){
            changeBorderColor('email', false)
            emailChecker = false
        }

        if(isNaN(phone)){
            // console.log(document.getElementsByClassName('telpon')[0].style)
            changeBorderColor('telpon', false)
            phoneChecker = false
        }
        if(!city){
            changeBorderColor('address', false)
            cityChecker = false
        }
        if(isHave==null || isHave==undefined){
            isHaveChecker = false
        }

        return nameChecker && storeNameChecker && emailChecker && phoneChecker && cityChecker && isHaveChecker
    }

    const changeBorderColor = (component, status) => {
        if(status){
            document.getElementsByClassName(component)[0].style.borderColor = 'black'
        }else{
            document.getElementsByClassName(component)[0].style.borderColor = '#F10000'

        }
    }

    // const phoneChecker = (e) =>{
        
    //     console.log(isNaN(e.value))
    // }

    const postApi = async (url, name, storeName, email, address, isHave, phone) =>{
        const headers = {"Access-Control-Allow-Origin": "*"}
        const data = {name,store_name:storeName,phone,email,city:address}
        const request = await axios.post(url+'submit', data, {headers} )
        // console.log('request', request);
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
                    <input type="email" style={{padding:'5px' ,}} className='email'/>
                    <p>Lokasi (Nama Kota)</p>
                    <input style={{padding:'5px' ,}}className='address'/>
                    <p>Telpon</p>
                    <input type="tel" pattern="[0-9]*" style={{padding:'5px' ,}} className='telpon' />
                    <p>Pernahkah Anda melakukan pembelian dari luar negeri sebelumnya?)</p>
                    <tr>
                        <td><input type="radio" name="ishave" onClick={()=>setAlreadyHave('true')}/>Ya</td>
                        
                        <td><input type="radio" name="ishave" onClick={()=>setAlreadyHave('false')}/>Tidak</td>
                    </tr>
                    <div onClick={()=>submit()}style={{background:'#C0022D', borderRadius:'16px', width:'200px', color:'#fff', textAlign:'center', padding: '10px', marginTop:'20px'}}>Submit</div>
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                    <br/>
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
