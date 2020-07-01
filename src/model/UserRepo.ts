import {Service} from "./service";

const localStorageConstant = "idUser";

export class UserRepo {
    public static async getId(): Promise<string>{
        const idUser = this.idUserFromLocalStorage;
        if(!!idUser)
            return idUser;
        
        return await Service.createUserId()
            .then(this.saveAndReturnId);
    }
    
    private static get idUserFromLocalStorage(): string | null{
        return window.localStorage.getItem(localStorageConstant)
    }
    
    private static saveAndReturnId = (idUser: string): string => {
        window.localStorage.setItem(localStorageConstant, idUser);
        return idUser;
    };  
}