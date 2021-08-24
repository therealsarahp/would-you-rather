import {
    ADD_QUESTION
} from "../actions/questions";
import { RECEIVE_DATA } from "../actions/shared";

export default function questions (state=[], action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.questions,
            }
        default :
            return state
    }
}