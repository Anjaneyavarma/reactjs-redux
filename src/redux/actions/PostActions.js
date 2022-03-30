import FakePostAPI from '../../apis/FakePostAPI';
import {actionTypes} from './actionTypes';

export const fetchPosts = () => async (dispatch) =>{
        const response = await FakePostAPI.get('/posts')
        console.log(response)

        dispatch({
            type: actionTypes.SET_POSTS,
            payload: response.data
        })
    }

export const setPosts = (posts) => {
    return {
        type: actionTypes.SET_POSTS,
        payload: posts,
    }
}

export const selectedPost = (post) => {
    return {
        type: actionTypes.SELECTED_POSTS,
        payload: post,
    }
}

export const removeSelectedPost = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_POSTS,
    }
}

export const addPost = (post) => {
    return {
        type: actionTypes.ADD_POST,
        payload: post
    }
}