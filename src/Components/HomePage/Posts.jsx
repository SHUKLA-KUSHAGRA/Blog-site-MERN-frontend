import React, { useEffect, useState } from 'react';
import { API } from "../../service/api.js";
import PostCard from './PostCard.jsx';
function Posts() {
    const [post,setPosts] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await API.getPosts();
            if(response.isSuccess)
            {
                setPosts(response.data);
            }
        }
        fetchData();
    },[])
    
    return (
        <>
        {
            post && post.length>0 ? post.map(post => {
                return <PostCard props={post}/>
            }) : <h1> NO PUBLISHED BLOGS ! PUBLISH ONE NOW </h1>
        }
        </>
    )
}

export default Posts;