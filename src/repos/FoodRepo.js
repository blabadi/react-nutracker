
class FoodRepo {
    findFoodMock(name) {
        if (name === '') return Promise.resolve([]); 
        return Promise.resolve([
           {
                id: 1,
                name: 'eggs',
                unit: 'unit',
                calories: 40,
                carbs: 0,
                fat: 4,
                protein: 7 
           },
           {
                id: 2,
                name: 'bread',
                unit: '100 g',
                calories: 200,
                carbs: 30,
                fat: 10,
                protein: 8 
            }
        ]);
    }

    findFood(name) {
        return fetch(`/api/food/search?name=${name}`)
            .then(response => response.json());
    }
}

let instance = new FoodRepo();

export default instance;