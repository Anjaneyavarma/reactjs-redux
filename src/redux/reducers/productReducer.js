import {actionTypes} from '../actions/actionTypes';

const initialState = {
    posts: [],
    post: {},
}

export const postReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case actionTypes.SET_POSTS:
            return { ...state,
                 posts: payload};
        
        case actionTypes.SELECTED_POSTS:
            return{
                ...state,
                post: payload
            }
        case actionTypes.REMOVE_SELECTED_POSTS:
            return { }
        default:
            return state;
    

    }
}