import {RECEIVE_ENTRIES} from '../actions/entriesActions'
export const entries = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return [...action.entries]; 
        default:
            return state
    } 
};
