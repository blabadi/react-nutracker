import {RECEIVE_USER} from "../actions/userActions";

export const user = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, action.user); 
        default:
            return state
    } 
};