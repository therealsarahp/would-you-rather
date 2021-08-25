import {_saveQuestionAnswer} from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
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
