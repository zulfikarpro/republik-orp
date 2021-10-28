import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const envName = 'production'
    const config = require('../../config.json')[envName];
    const url = config.url;


    useEffect(() => {
        if(localStorage.getItem('auth_token'))
        {history.push('/admin')}
    }, [])



    const submitData = async() =>{
        const username = document.getElementsByClassName('user')[0].value
        const password = document.getElementsByClassName('password')[0].value 
        const headers = {"Access-Control-Allow-Origin": "*"}
        const request = await axios.post(url+'login',{username, password}, {headers})
        console.log(request)
        if(request.data.statusCode===200){
            localStorage.setItem('auth_token', "Bearer "+ request.data.auth_token)
            history.push('/admin')
        }else{
            alert('periksa kembali')
        }
    }

    return (
        <>
        <div style={{height:'100vh', maxWidth:'800px', display:'flex', flexDirection:'column', justifyContent:'center', margin:'auto', }}>
                <div style={{height:'50%', width:'90%', margin:'auto' ,display:'flex', flexDirection:'column', justifyContent:'center', borderRadius:'40px', border:'1px', background:'#fffcff' }}>
                    <h1 style={{textAlign:'center'}}>Login</h1>
                    <div style={{height:'60%', width:'80%', margin:'auto', display:'flex', flexDirection:'column'}}>
                    <input className='user' style={{padding:'10px', fontSize:'1.2rem', marginBottom:'20px', background:'transparent', border:'none', borderBottom:'1px solid'}} placeholder='user'></input>
                    <input className='password' type='password' style={{border:'none', borderBottom:'1px solid', padding:'10px', fontSize:'1.2rem', marginBottom:'20px', background:'transparent'}} placeholder='password'></input>
                    <div type='submit'onClick={()=>{submitData()}} style={{background:'#C0022D', width:'100px', margin:'auto', padding:'20px', borderRadius:'20px', textAlign:'center', color:'#fff', fontSize:'1.4rem'}}>enter</div>
                    </div>
              </div>
        </div>  
        </>
    )
}

export default Login
