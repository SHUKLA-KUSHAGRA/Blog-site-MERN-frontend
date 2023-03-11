import React, { useContext, useState, useEffect } from 'react'
import { Box, Button, TextareaAutosize } from '@mui/material';
import { DataContext } from "../../context/DataProvider.jsx";
import {API} from '../../service/api.js';
import Comment from './Comment.jsx';

const initialValues = {
    username : '',
    postId : '',
    description : '',
    date : '', 
}

function Comments({post}) {
    const url = "https://rb.gy/lnt7ir";
    const [comment,setComment] = useState(initialValues);
    const {account} = useContext(DataContext);
    const [displayComment,setDisplayComment] = useState([]);
    const [toggle,setToggle] = useState('false');

    const handleChange = (event) => {
        const {value} = event.target;
        setComment({...comment,
            username : account.username,
            postId : post._id,
            date: new Date(),
            description : value});
    }

    const addComment = async () => {
        const response  = await API.newComment(comment);
        if(response.isSuccess){
            setComment(initialValues);
        }
        setToggle(prevState => !prevState);
    }

    useEffect(()=>{
        const getComment = async () => {
            try{
                const response = await API.getAllComments(post._id);
                if(response.isSuccess){
                    setDisplayComment(response.data);
                }
            }
            catch(e){
            }
        }
        getComment();
    },[post,toggle]);

    return (
    <>
        <h3 style={{marginTop : 100}}>Comment Section</h3>
        <Box>
            <Box display='flex' justifyContent='center'>
                <img src={url} alt='dummy dp' style={{height : 50,width :50}}/>
                <TextareaAutosize
                    minRows={2}
                    value = {comment.description}
                    placeholder="Type your comment ..."
                    style={{fontSize : 18,width : '70%',margin : 'auto 10px'}}
                    onChange={handleChange}
                />
                <Button variant='contained' onClick={addComment}>Comment</Button>
            </Box>
            <Box>
                {   displayComment &&
                    displayComment.length>0 &&
                    displayComment.map((displayComment,idx) => {
                        return <Comment comment={displayComment} setToggle={setToggle} key={idx}/>
                    })
                }
            </Box>
        </Box>
    </>
  )
}

export default Comments;