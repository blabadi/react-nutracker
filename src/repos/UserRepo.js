import requestBuilder from "./RequestBuilder";

export const AuthStore = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

class UserRepo {
    findUser(id) {
        return requestBuilder.execute({
            url : `/api/user/${id}`
        });
    }
}

let instance = new UserRepo();
export default instance;