
class RequestBuilder {
    execute(reqInfo) {
        const {url} = reqInfo;
        return fetch(url, {
            headers: {
                'Authorization': 'Basic YmFzaGFyOnBhc3N3b3Jk'
            }
        }).then(response => response.json()); 
    }
}

export default new RequestBuilder();