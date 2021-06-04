export interface ResponseStatus {
    "status": number;
    "statusText": string;
}

// export interface User extends ResponseStatus {
//     "responseText": {id: number, user_id: string, password: string, register_date: Date}
// }

export interface User {
    "id": number;
}

export interface Project extends ResponseStatus {
    "id": number;
    "title": string;
    "content": string;
    "register_date": Date;
    "authorId": number;
    "description": string;
    "dev_period": string;
    "dev_tool": string;
}

export interface Blog {
    "id": number;
    "title": string;
    "content": string;
    "register_date": Date;
    "authorId": number;
    "description": string;
    "dev_period": string;
    "dev_tool": string;
}

export interface ImageFile {
    "fieldname": string;
    "originalname": string;
    "encoding": string;
    "mimetype": string;
    "destination": string;
    "filename": string;
    "path": string;
    "size": number;
}