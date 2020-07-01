import Axios from "axios";
import {Reaction, ResultIp, User} from "./types";

const urlDev = "http://localhost:3001";
const urlBase = "/api";

const isProd = process.env.NODE_ENV === "production"; 
const url = isProd ? urlBase : `${urlDev}${urlBase}`;

const urlReaction = `${url}/blog/reaction`;

const urlIpInfo = "http://ipinfo.io";


Axios.interceptors.request.use(function (config) {
    config.headers['Access-Control-Allow-Origin'] =  '*';
    config.url = `${config.url}?timestamp=${new Date().getTime()}`;

    return config;
});

export class Service {
    public static createUserId = (): Promise<string> =>
        Axios.post<User>(`${url}/user`).then(x => x.data.id);
    
    public static createReaction = async (reaction: Reaction): Promise<void> => {
        await Axios.post<void>(urlReaction, reaction);
    };
    
    public static removeReaction = (idArticle: string, idUser: string): Promise<void> =>
        Axios.delete(urlReaction, {data: {idArticle, idUser}});
    
    public static getMyIp = (): Promise<string> =>
        Axios.get<ResultIp>(urlIpInfo).then(x => x.data.ip);
    
    public static listAllReations = (idUser: string): Promise<Reaction[]> =>
        Axios.get<Reaction[]>(`${urlReaction}/${idUser}`)
            .then(x => x.data);
}