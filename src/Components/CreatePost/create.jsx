import React, { useState , useEffect, useContext } from 'react';
import { Grid , Box , FormControl, TextField, TextareaAutosize, Button } from "@mui/material";
import './create.css';
import Navbar from '../HomePage/Navbar';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api.js';

const initialPost = {
  title : '',
  category : '',
  picturePath : '',
  createdDate : '',
  userName : '',
  description : ''
}

function Create() {
  const [post,setPost] = useState(initialPost);
  const [file,setFile] = useState('');
  const {account} = useContext(DataContext);
  // const location  = useLocation();
  const navigate = useNavigate();
  const logo = "http://surl.li/fikac";
  const url = post.picturePath ? post.picturePath : logo; 
  useEffect(() => {
    const getImage = async () => {
        if(file)
        {
          const data = new FormData();
          data.append("name",file.name);
          data.append("file",file);
          // API CALL
          const response = await API.uploadFile(data);
          post.picturePath=response.data;
          post.userName=account.username;
        }
    }
    getImage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file])
  
  const handleChange = (event) => {
    const {name,value} = event.target;
    setPost({...post,
            createdDate: new Date(),
            [name] : value});
  }

  const savePost = async () => {
      const response = await API.createPost(post);
      if(response.isSuccess){
        navigate('/home');
      }
  }

  return (
    <>
      <Navbar/>
        <Grid container alignItems="center" justifyContent="center" marginTop="100px">        
            <Box sx={{border: 1,width:"55%",minWidth:300,p:3,boxShadow:20}}>
            <img src={url} alt="logo" style={{width:"70%",height:200}}/>
              <div style={{display:'flex',justifyContent:'center'}}>
                <FormControl style={{width:"75%"}}>
                  <label htmlFor='fileInput'>
                    <AddCircleIcon fontSize="large" color="action"/>
                  </label>
                  <input type='file' id='fileInput' style={{display:'none'}} onChange={(event)=>setFile(event.target.files[0])}/>
                  <TextField onChange={handleChange} label='Title' type='text' name='title' style={{margin:5}}/>
                  <TextField onChange={handleChange} label='Category' type='text' name='category' style={{margin:5}}/>
                  <TextareaAutosize onChange={handleChange} minRows={10} placeholder="Write a blog..." style={{margin:5}} name='description'/>
                  <Button variant='contained' style={{margin:5}} onClick={savePost}>Publish Blog</Button>
                </FormControl>
              </div>
            </Box>
        </Grid>
    </>
  )
}

export default Create;