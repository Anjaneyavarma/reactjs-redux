import React,  {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { selectedPost, removeSelectedPost} from '../redux/actions/PostActions';

function PostDetail() {
    const post = useSelector(state => state.allPosts.post)
    const productId = useParams();
    const dispatch = useDispatch();

    const fetchSelectedPost= async () =>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${productId.id}`).catch((err)=>{
            console.log(err);
        })
        dispatch(selectedPost(response.data))
    }

    useEffect(()=> {
        fetchSelectedPost();
        return()=>{
            dispatch(removeSelectedPost())
        }
    },[productId.id])

    return (
        <div>
            <h1>{post.title}</h1>
            <br/>
            <p>{post.body}</p>
        </div>
    )
}

export default PostDetail;
