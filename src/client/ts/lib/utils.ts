interface APIObject {
    "url": string
    "data": {}
}
export async function sendAPI(method: string, apiobj: APIObject) {
    try {
        return await makeRequest(method, apiobj.url, apiobj.data);
    }
    catch (err) {
        console.log(err)
    }
}

function makeRequest(method: string, url: string, data: {}): Promise<any> {
    return new Promise( (resolve, reject)=>{
        const xhr = new XMLHttpRequest;
        
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onload = ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    "status": xhr.status,
                    "statusText": xhr.statusText
                })
            }
        }
    })
}