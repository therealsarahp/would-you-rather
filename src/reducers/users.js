import { RECEIVE_DATA, ANSWER_QUESTION, ADD_QUESTION } from "../actions/shared";

export default function users(state=[], action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.users
            };
        case ANSWER_QUESTION:
            return{
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.id]: action.answer
                    }
                }
            }

        case ADD_QUESTION:
            const { question } = action
            return{
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([question.id])
                }

            }
        default :
            return state
    }
}