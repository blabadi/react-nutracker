import {PERIOD_CHANGED} from "../actions/dateNavActions";

export const period = (state = { from: new Date(), to: new Date() }, action) => {
    switch (action.type) {
        case PERIOD_CHANGED:
            const { from, to } = action;
            return Object.assign({}, state, {from, to}); 
        default:
            return state
    } 
};