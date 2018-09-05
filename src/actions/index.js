export const SEARCH_FOOD = 'SEARCH_FOOD';

export function searchFood(term) {
    console.log(`in searchFood ${term}`);
    return {
        type: SEARCH_FOOD,
        term
    }
}