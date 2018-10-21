
class RequestBuilder {
    execute(reqInfo) {
        const {url} = reqInfo;
        return fetch(url, {
            headers: {
                'Authorization': 'Basic YmFzaGFyOmJhc2hhcg=='
            }
        }).then(response => response.json()); 
    }
}

export default new RequestBuilder();