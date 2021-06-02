export interface ResUser {
    "id": number;
    "user_id": string;
    "password": string;
    "regitser_date": Date;
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