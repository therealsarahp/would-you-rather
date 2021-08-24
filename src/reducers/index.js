import { combineReducers } from 'redux';
import { loadingBarReducer } from "react-redux-loading";
import authUser  from './authUser';
import users  from './users';
import questions from './questions'

export default combineReducers({
    users,
    questions,
    authUser,
    loadingBar: loadingBarReducer,
})