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

function Login() {
  const [account,toggleAccount] = useState('SignUp');
  const [signup , setSignup] = useState(signUpInitialValue);
  const toggle = () => {
    account==='SignUp'? toggleAccount('Login') : toggleAccount('SignUp');
  }
  const onInputChange = (event) => {
    setSignup({...signup,[event.target.name] : event.target.value});
  }
  const SignUpUser = async () => {
    let response = await API.userSignup(signup);
    if(response.isSuccess)
    {
      setSignup(signUpInitialValue);
      toggleAccount('Login');
    }
  }
  const LoginUser = () => {

  }
  return (
      <Grid container alignItems="center" justifyContent="center" marginTop="5%">        
        <Box sx={{border: 1,width:"55%",minWidth:300,p:3,boxShadow:20}}>
        <img src={logo} alt="logo" style={{width:"70%",height:200}}/>
        {account==='Login' ? 
          (
            <Grid container direction="column" alignItems="center" justifyContent="center">
            <TextField label='Username' name='username' type='email' style={{width:"70%",margin:5}}/>
            <TextField label='Password' name='password' type='password' style={{width:"70%",margin:5}}/>
            <Button variant='contained' onClick={LoginUser} style={{width:"70%",margin:10,padding:15}}>Login</Button>
            <hr className='bar'/>
            <Typography variant='h6' color='primary' fontSize='24px'>Create An Account !</Typography>
            <Button variant='contained' style={{width:"70%",margin:10,padding:15}} onClick={toggle}>Sign Up</Button>
            </Grid>
          ) : 
          (
            <Grid container direction="column" alignItems="center" justifyContent="center">
            <TextField label='Name' type='text' name='name' onChange={(event) => onInputChange(event)}style={{width:"70%",margin:5}}/>
            <TextField label='Username' type='text' name='username' onChange={onInputChange} style={{width:"70%",margin:5}}/>
            <TextField label='Email-id' type='email' name='email' onChange={onInputChange} style={{width:"70%",margin:5}}/>
            <TextField label='Password' type='password' name='password' onChange={onInputChange} style={{width:"70%",margin:5}}/>
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