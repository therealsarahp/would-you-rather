// import {handleSetAuthUser, setAuthUser} from "./authUser";
import { showLoading, hideLoading } from "react-redux-loading";
import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";


export const RECEIVE_DATA = "RECEIVE_DATA";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

function receiveData(users, questions){
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
function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

// const AUTH_USERID = 'sarahedo';

export function handleInitialData(){
    return(dispatch)=> {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(), _getQuestions()
        ]).then(([users, questions])=> {
            dispatch(receiveData(users, questions))
            // dispatch(setAuthUser('sarahedo'))
            dispatch(hideLoading())
        })
    }
}


export function handleAnswerQuestion(info){
    return(dispatch) => {
        dispatch(answerQuestion(info));
        return _saveQuestionAnswer({
                                    qid: info.id,
                                    authedUser: info.authUser,
                                    answer: info.answer})
            .catch((e)=>{
                console.warn('Error in handleSaveAnswer: ', e)
                dispatch(answerQuestion(info))
                alert('There was an error saving that answer. Try Again')
            })
    }
}

export function handleAddQuestion(question){
    return (dispatch)=> {

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText: question.optionOne,
            optionTwoText: question.optionTwo,
            author: question.authUser
        }
        )
            .then((question)=> dispatch(addQuestion(question)))
            .then(dispatch(hideLoading()))
    }
}