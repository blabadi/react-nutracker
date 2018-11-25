import foodRepo from '../repos/FoodRepo';
export const SEARCH_FOOD = 'SEARCH_FOOD';
export const SELECT_FOOD = 'SELECT_FOOD';
export const UNSELECT_FOOD = 'UNSELECT_FOOD';
export const RECEIVE_SEARCH_FOOD_RESULTS = 'RECEIVE_SEARCH_FOOD_RESULTS'

export const fetchFood = (term) => (dispatch) => {
    dispatch(searchFood(term)); 
    return foodRepo.findFood(term)
        .then(foods => { 
                dispatch(receiveSearchFoodResults(term, foods))
            }
        );
};

export const selectFood = (result) => ({
    type: SELECT_FOOD,
    food: result.data
});

export const unSelectFood = () => ({
    type: UNSELECT_FOOD
});

export const searchFood = (term) => ({
    type: SEARCH_FOOD,
    term: term
});

export const receiveSearchFoodResults =  (term, foods) => ({
    type: RECEIVE_SEARCH_FOOD_RESULTS,
    term,
    results: foods,
  });



