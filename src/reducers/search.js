import {SEARCH_FOOD} from "../actions";
import {instance as foodRepo} from '../repos/FoodRepo';

const searchFoodResult = (state = [], action) => {
    switch (action.type) {
        case SEARCH_FOOD:
            return handleSearch(action.term);
        default:
            return state
    } 
};

const handleSearch = (term) => {
    console.log(`in handleSearch ${term}`);
    const results = foodRepo.findFood(term);
    const searchResults = results.map(food =>  {
            return { 
                key: food.id, 
                text: food.name + ", " + food.unit
            }
        });
    return searchResults
}  

export default searchFoodResult;