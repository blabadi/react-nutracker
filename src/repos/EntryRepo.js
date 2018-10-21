import requestBuilder from "./RequestBuilder";
class EntryRepo {
    find(start, end) {
        return requestBuilder.execute({
            url : `/api/entry/from/${start}/to/${end}`
        });
    }
}

let instance = new EntryRepo();
export default instance;