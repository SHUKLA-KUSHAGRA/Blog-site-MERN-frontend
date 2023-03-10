import React, { useEffect, useState } from 'react';
import { API } from "../../service/api.js";
import PostCard from './PostCard.jsx';
import { useSearchParams } from 'react-router-dom';

function Posts() {
    const [post,setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    useEffect(()=> {
        const fetchData = async () => {
            const response = await API.getPosts({category : category || ''});
            if(response.isSuccess){
                setPosts(response.data);
            }
        }
        fetchData();
    },[category]);
    
    return (
        <>
        {
            post && post.length>0 ? post.map((post,idx) => {
                return <PostCard props={post} key={idx}/>
            }) : <h1> NO PUBLISHED BLOGS ! PUBLISH ONE NOW </h1>
        }
        </>
    )
}

export default Posts;