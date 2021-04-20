interface APIObject {
    "url": string
    "data": {}
}
export async function sendAPI(method: string, apiobj: APIObject) {
    try {
        const xhr = new XMLHttpRequest;

        xhr.open(method, apiobj.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(apiobj.data));
        
        xhr.onload = async () => {
            const result = JSON.parse(xhr.response)
            await result
        }

    }
    catch (err) {
        console.log(err)
    }
}