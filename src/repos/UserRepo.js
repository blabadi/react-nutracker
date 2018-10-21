import requestBuilder from "./RequestBuilder";
class UserRepo {
    findUser(id) {
        return requestBuilder.execute({
            url : `/api/user/${id}`
        });
    }
}

let instance = new UserRepo();
export default instance;