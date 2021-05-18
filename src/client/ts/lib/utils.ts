interface APIObject {
    "url": string
    "data": {}
}

export async function sendAPI(method: string, obj: APIObject) {
    try {
        const result = await makeRequest(method, obj.url, obj.data);
        return JSON.parse(result);
    }
    catch (err) {
        throw err;
    }
}

function makeRequest(method: string, url: string, data: {}): Promise<any> {
    return new Promise( (resolve, reject)=>{
        const xhr = new XMLHttpRequest;
        
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300)
                resolve(xhr.response)
            else
                reject({"status": xhr.status, "statusText": xhr.statusText, "responseText": xhr.responseText})
        };
    })
}