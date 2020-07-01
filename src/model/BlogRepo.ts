import {Reaction, TypeReactionEnum} from "./types";
import {UserRepo} from "./UserRepo";
import {Service} from "./service";

export class BlogRepo {
    private static loadedReactions = false;
    
    private static _reactions: Reaction[] = [];
    
    constructor(){
        this.loadReactions();
    }
    
    public getReaction = (idArticle: string): Promise<Reaction | undefined> =>
        BlogRepo.callbackOnLoadedReactions(() => 
            BlogRepo._reactions.find(x => x.idArticle === idArticle));
    
    public createReaction = async (idArticle: string, type: TypeReactionEnum): Promise<void> => {
        const reaction = await this.getReaction(idArticle);
        
        const idUser = await UserRepo.getId();
        if(!!reaction)
            await Service.removeReaction(idArticle, idUser);
        
        await Service.createReaction({idUser, idArticle, type})
            .then(this.loadReactions);
    };
    
    public removeReaction = (idArticle: string): Promise<void> =>
        UserRepo.getId()
            .then(idUser => Service.removeReaction(idArticle, idUser))
            .then(this.loadReactions);


    private loadReactions = (): Promise<void> =>
        UserRepo.getId()
            .then(Service.listAllReations)
            .then(lst => {
                BlogRepo._reactions = lst;
                BlogRepo.loadedReactions = true;
            });

    private static callbackOnLoadedReactions = <T>(callback: () => T): Promise<T> =>
        new Promise<T>(resolve => {
            if (BlogRepo.loadedReactions) {
                resolve(callback());
            }

            setTimeout(() => BlogRepo.callbackOnLoadedReactions(callback).then(resolve), 5000);
        });
}