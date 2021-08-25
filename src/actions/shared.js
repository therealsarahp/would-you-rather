// import { receiveQuestions} from "./questions";
// import { receiveUsers } from './users';
import { setAuthUser } from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";
import {_getQuestions, _getUsers, _saveQuestionAnswer} from "../utils/_DATA";

export const RECEIVE_DATA = "RECEIVE_DATA";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveData(users, questions){
    return{
        type: RECEIVE_DATA,
        users,
        questions,
    }
}

function answerQuestion({ authUser, id, answer }){
    return{
        type:ANSWER_QUESTION,
        authUser,
        id,
        answer
    }
}

const AUTH_USERID = 'sarahedo';

export function handleInitialData(){
    return(dispatch)=> {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(), _getQuestions()
        ]).then(([users, questions])=> {
            dispatch(receiveData(users, questions))
            dispatch(setAuthUser(AUTH_USERID))
            dispatch(hideLoading())
        })
    }
}


export function handleAnswerQuestion(info){
    return(dispatch) => {
        dispatch(answerQuestion(info));
        return _saveQuestionAnswer(info)
            .catch((e)=>{
                console.warn('Error in handleSaveAnswer: ', e)
                dispatch(answerQuestion(info))
                alert('There was an error saving that answer. Try Again')
            })
    }
}
