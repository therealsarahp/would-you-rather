
import { RECEIVE_DATA, ANSWER_QUESTION } from "../actions/shared";

export default function questions (state=[], action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions,
            }
        case ANSWER_QUESTION:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                [action.answer]: {
                        ...state[action.id][action.answer],
                    votes: state[action.id][action.answer].votes.concat([action.authUser]),

                }
        }
            }
        default :
            return state
    }
}