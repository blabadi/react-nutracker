import {RECEIVE_ENTRIES, RECEIVE_ENTRY} from '../actions/entriesActions'

export const entries = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return [...action.entries]; 
        case RECEIVE_ENTRY:
            return [...state, action.entry]
        default:
            return state
    } 
};
