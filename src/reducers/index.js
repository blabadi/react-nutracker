import { combineReducers } from 'redux'
import searchFoodResult from './search'
import {user} from './user'
import {entries} from './entries'

const nutracker = combineReducers({
    searchFoodResult,
    user,
    entries  
})
export default nutracker;