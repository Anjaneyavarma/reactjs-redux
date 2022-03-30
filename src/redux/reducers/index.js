import { combineReducers } from 'redux'
import { postReducer } from './productReducer'

const reducers = combineReducers({
    allPosts: postReducer,
})

export default reducers;