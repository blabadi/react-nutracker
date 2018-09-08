import foodRepo from '../repos/FoodRepo';
export const SEARCH_FOOD = 'SEARCH_FOOD';
export const RECEIVE_SEARCH_FOOD_RESULTS = 'RECEIVE_SEARCH_FOOD_RESULTS'


export const fetchFood = (term) => {
    return (dispatch) => {
        dispatch(searchFood); 
        return foodRepo.findFood(term)
            .then(foods => { 
                    dispatch(receiveSearchFoodResults(term, foods))
                }
            );
    }
}

export const searchFood = (term) => ({
    type: SEARCH_FOOD,
    term: term
});

export const receiveSearchFoodResults =  (term, foods) => ({
    type: RECEIVE_SEARCH_FOOD_RESULTS,
    term,
    results: foods,
  });



