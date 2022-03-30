import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect, useState} from 'react'
import PostComponent from './PostComponent'
import axios from 'axios'
import {fetchPosts, setPosts} from '../redux/actions/PostActions';

export default function PostListing() {

    const posts = useSelector(state => state.allPosts.posts)
    const dispatch = useDispatch();
    const [id, setid] = useState()
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")


    // const fetchPosts = async () => {
    //     const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err)=>{
    //         console.log("err", err)
    //     })
    //     dispatch(setPosts(response.data))
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        const post = {
            userId: 1,
            title: title,
            body: body,
        };

        let display = JSON.stringify(post)

        axios.put("https://jsonplaceholder.typicode.com/posts/1", {display}).then(data => console.log(data))
    }

    

    useEffect(()=>{
        // fetchPosts();
        dispatch(fetchPosts());
    },[])
    return (
        <div>
            <h1>Posts</h1>
            <div>
                <h1>Add Form</h1>
                <form onSubmit={()=> onSubmit}>
                    <div>
                        <label>Titile:</label>
                        <br/>
                        <input type="text" 
                            value={title}
                            placeholder="Enter Post Titile"
                            onChange={(e)=> settitle(e.target.value)}
                        />
                        <br/>
                        <label>Description:</label>
                        <br/>
                        <input type="text" 
                            value={body}
                            placeholder="Enter Post Description"
                            onChange={(e)=> setbody(e.target.value)}  
                        />
                        <br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <hr/>
            <div>
                <PostComponent/>
            </div>
            
        </div>
    )
}
