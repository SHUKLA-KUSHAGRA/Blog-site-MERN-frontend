import React, { useContext } from 'react';
import { Box, Typography , styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DataContext } from '../../context/DataProvider';
import {API} from "../../service/api.js";

const Component = styled(Box)`
    margin-top : 20px;
    background : #F5F5F5;
    padding : 10px;
`
const ChildComponent = styled(Box)`
    display : flex;
`
const Name = styled(Typography)`
    font-weight: 1000,
    font-size: 18px;
    margin-right : 20px;
    margin-left : 10px;
`;

const StyledDate = styled(Typography)`
    font-size: 16px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Description = styled(Typography)`
    font-size: 18px;
    float:left;
`;

function Comment({comment , setToggle}) {
    const url = "https://rb.gy/lnt7ir";
    const {account} = useContext(DataContext);

    const deleteComment = async () => {
        const response = await API.deleteComment(comment._id);
        if(response.isSuccess){
            setToggle(prevState => !prevState);
        }
    }
    return (
    <Component>
        <ChildComponent>
        <img src={url} alt='dummy dp' style={{height : 30,width :30}}/>
            <Name>@{comment.username}</Name>
            <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
            {   comment.username === account.username && 
                <DeleteIcon onClick={deleteComment}/>
            }
        </ChildComponent>
        <ChildComponent>
            <Description>
                Comment :- {comment.description}
            </Description>
        </ChildComponent>
    </Component>
    )
}

export default Comment;