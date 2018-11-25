import requestBuilder from "./RequestBuilder";
class EntryRepo {
    find(start, end) {
        return requestBuilder.execute({
            url : `/api/entry/from/${start}/to/${end}`
        });
    }

    create(entry) {
        return requestBuilder.execute({
            url: `/api/entry/`,
            options: {
                method: 'post',
                body: JSON.stringify(entry)
            }
        })
    }
}

let instance = new EntryRepo();
export default instance;