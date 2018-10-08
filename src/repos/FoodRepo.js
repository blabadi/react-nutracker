import requestBuilder from "./RequestBuilder";
class FoodRepo {
    findFood(name) {
        return requestBuilder.execute({
            url : `/api/food/search?name=${name}`
        });
    }
}

let instance = new FoodRepo();
export default instance;