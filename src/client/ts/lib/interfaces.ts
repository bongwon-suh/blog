export interface ResponseStatus {
    "status": number;
    "statusText": string;
}

export interface User extends ResponseStatus {
    "responseText": {id: number, user_id: string, password: string, register_date: Date}
}

export interface Project extends ResponseStatus {
    "id": number;
    "title": string;
    "content": string;
    "register_date": Date;
    "authorId": number;
}