
class FoodRepo {
    findFood(name) {
        return [
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
        ];
    }
}

let instance = new FoodRepo();

export {instance};