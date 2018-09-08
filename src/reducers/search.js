import {SEARCH_FOOD, RECEIVE_SEARCH_FOOD_RESULTS} from "../actions/searchFoodActions";

const searchFoodResult = (state = { isFetching: false, term: '', results: [] }, action) => {
    switch (action.type) {
        case SEARCH_FOOD:
            
            return Object.assign({}, state, { 
                isFetching: true,
                term: action.term
            }); 
        case RECEIVE_SEARCH_FOOD_RESULTS:
            return Object.assign({}, state, { 
                isFetching: false,
                term: action.term,
                results: handleSearchFoodResults(action.results)
            }); 
        default:
            return state
    } 
};

const handleSearchFoodResults = (results) => {
    const searchResults = results.map(food =>  {
            return { 
                key: food.id, 
                text: food.name + ", " + food.unit
            }
        });
    return searchResults
}

export default searchFoodResult;