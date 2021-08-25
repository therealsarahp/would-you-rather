import { RECEIVE_DATA, ANSWER_QUESTION } from "../actions/shared";

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
        default :
            return state
    }
}