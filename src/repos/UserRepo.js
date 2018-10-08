import requestBuilder from "./RequestBuilder";
class UserRepo {
    findUser(id) {
        return requestBuilder.execute({
            url : `/api/users/${id}`
        });
    }
}

let instance = new UserRepo();
export default instance;