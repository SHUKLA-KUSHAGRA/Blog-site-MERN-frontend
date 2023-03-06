import React from 'react';
import { useState } from 'react';
import {Box , TextField , Button , Grid , Typography } from '@mui/material';
import logo from '../../assets/logo.jpg';
import './Login.css';
import { API } from '../../service/api.js';

const signUpInitialValue = {
  name : '',
  username : '',
  email : '',
  password : ''
}
const loginInitialValue = {
  username : '',
  password : ''
}

function Login() {
  const [account,toggleAccount] = useState('SignUp');
  const [signup , setSignup] = useState(signUpInitialValue);
  const [login , setLogin] = useState(loginInitialValue);
  const toggle = () => {
    account==='SignUp'? toggleAccount('Login') : toggleAccount('SignUp');
  }
  const onInputChangeSignUP = (event) => {
    const {name , value} = event.target;
    setSignup({...signup,[name] : value});
  }
  const onInputChangeLogin = (event) => {
    const {name , value} = event.target;
    setLogin({...login,[name] : value});
  }
  const SignUpUser = async () => {
    let response = await API.userSignup(signup);
    if(response.isSuccess)
    {
      setSignup(signUpInitialValue);
      toggleAccount('Login');
    }
  }
  const LoginUser = async () => {
    let response = await API.userLogin(login);
    if(response.isSuccess)
    {
        setLogin(loginInitialValue);
    }
  }
  return (
      <Grid container alignItems="center" justifyContent="center" marginTop="5%">        
        <Box sx={{border: 1,width:"55%",minWidth:300,p:3,boxShadow:20}}>
        <img src={logo} alt="logo" style={{width:"70%",height:200}}/>
        {account==='Login' ? 
          (
            <Grid container direction="column" alignItems="center" justifyContent="center">
            <TextField label='Username' onChange={onInputChangeLogin} name='username' type='text' style={{width:"70%",margin:5}}/>
            <TextField label='Password' onChange={onInputChangeLogin} name='password' type='password' style={{width:"70%",margin:5}}/>
            <Button variant='contained' onClick={LoginUser} style={{width:"70%",margin:10,padding:15}}>Login</Button>
            <hr className='bar'/>
            <Typography variant='h6' color='primary' fontSize='24px'>Create An Account !</Typography>
            <Button variant='contained' style={{width:"70%",margin:10,padding:15}} onClick={toggle}>Sign Up</Button>
            </Grid>
          ) : 
          (
            <Grid container direction="column" alignItems="center" justifyContent="center">
            <TextField label='Name' type='text' name='name' onChange={onInputChangeSignUP} style={{width:"70%",margin:5}}/>
            <TextField label='Username' type='text' name='username' onChange={onInputChangeSignUP} style={{width:"70%",margin:5}}/>
            <TextField label='Email-id' type='email' name='email' onChange={onInputChangeSignUP} style={{width:"70%",margin:5}}/>
            <TextField label='Password' type='password' name='password' onChange={onInputChangeSignUP} style={{width:"70%",margin:5}}/>
            <Button variant='contained' onClick={SignUpUser} style={{width:"70%",margin:10,padding:15}}>Sign Up</Button>
            <hr className='bar'/>
            <Typography variant='h6' color='primary' fontSize='24px'>Already Have An Account !</Typography>
            <Button variant='contained' style={{width:"70%",margin:10,padding:15}} onClick={toggle}>Login</Button>
            </Grid>
          )}
      </Box>
    </Grid>
  );
}

export default Login;