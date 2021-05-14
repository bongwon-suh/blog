export interface ResponseStatus {
    "status": number;
    "statusText": string;
}

export interface User extends ResponseStatus {
    "responseText": {id: number, user_id: string, password: string, register_date: Date}
}