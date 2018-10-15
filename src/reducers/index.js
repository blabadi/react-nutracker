import { combineReducers } from 'redux'
import searchFoodResult from './search'
import {user} from './user'
import {entries} from './entries'
import {period} from './period'

const nutracker = combineReducers({
    searchFoodResult,
    user,
    entries, 
    period  
})
export default nutracker;