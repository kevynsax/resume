
export interface User {
    id: string
}

export enum TypeReactionEnum {
    like, dislike
}


export interface Reaction {
    idUser: string;
    idArticle: string;
    type: TypeReactionEnum;
}

export interface ResultIp {
    ip: string;
}