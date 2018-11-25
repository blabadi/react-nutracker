
class RequestBuilder {
    execute(reqInfo) {
        const { url, options } = reqInfo;
        const fetchOptions = {
            headers: {
                'Authorization': 'Basic YmFzaGFyOmJhc2hhcg==',
                'Content-Type': 'application/json'
            },
            ...options
        };
        
        return fetch(url, fetchOptions).then(response => response.json()); 
    }
}

export default new RequestBuilder();