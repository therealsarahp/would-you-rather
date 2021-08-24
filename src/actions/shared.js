// import { receiveQuestions} from "./questions";
// import { receiveUsers } from './users';
import { setAuthUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";
import {_getQuestions, _getUsers} from "../utils/_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";

export function receiveData(users, questions){
    return{
        type: RECEIVE_DATA,
        users,
        questions,
    }
}

const AUTH_USERID = 'sarahedo';

export function handleInitialData(){
    return(dispatch)=> {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(), _getQuestions()
        ]).then(({users, questions})=> {
            dispatch(receiveData(users, questions))
            dispatch(setAuthUser(AUTH_USERID))
            dispatch(hideLoading())
        })
    }
}