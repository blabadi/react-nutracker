import {SEARCH_FOOD, RECEIVE_SEARCH_FOOD_RESULTS, SELECT_FOOD, UNSELECT_FOOD} from "../actions/searchFoodActions";

const searchFoodResult = (state = { isFetching: false, term: '', results: [], selectedFood: {} }, action) => {
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
        case SELECT_FOOD: 
            return Object.assign({}, state, { 
                selectedFood: action.food,
                results: []
            }); 
        case UNSELECT_FOOD: 
            return Object.assign({}, state, { 
                selectedFood: {}
            }); 
        default:
            return state
    } 
};

const handleSearchFoodResults = (results) => {
    const searchResults = results.map(food =>  {
            return { 
                key: food.id, 
                text: food.name + ", " + food.unit,
                data: food
            }
        });
    return searchResults
}

export default searchFoodResult;