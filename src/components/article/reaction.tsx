import React, {Component} from "react";
import IconButton, {typeIcon} from "../utils/icon_button";
import {Reaction, TypeReactionEnum} from "../../model/types";
import {BlogRepo} from "../../model/BlogRepo";
import "./reaction.scss";

interface ReactionState {
    chosenReaction: TypeReactionEnum | undefined
}

interface ReactionProps {
    idArticle: string
}

interface ReactionConfig {
    icon: typeIcon;
    type: TypeReactionEnum;
}

const reactions: ReactionConfig[] = [
    {icon: "like", type: TypeReactionEnum.like},
    {icon: "dislike", type: TypeReactionEnum.dislike}
];

export class ReactionComponent extends Component<ReactionProps, ReactionState>{
    private readonly blogRepo: BlogRepo;

    state = {
        chosenReaction: undefined
    };
    
    constructor(props: ReactionProps){
        super(props);
        this.blogRepo = new BlogRepo();
    }
    
    public componentDidMount(): void {
        this.updateInternalState();
    }
    
    private updateInternalState = () => {
        this.blogRepo.getReaction(this.props.idArticle)
            .then(x => this.setState({chosenReaction: x?.type}));
    };

    public render = () => (<>{reactions.map(this.renderIconButton)}</>);
    
    private renderIconButton: (obj: ReactionConfig) => any = ({type, icon}) => {
        const active = this.state.chosenReaction === type;
        
        return (
            <div className={`reaction-item ${active ? 'active' : ''}`} key={type}>
                <IconButton name={icon} onClick={() => this.handleClick(type)} />
            </div>
        )
    };


    private handleClick = (type: TypeReactionEnum) => {
        const hasReaction = this.state.chosenReaction === type;
        const {createReaction, removeReaction} = this.blogRepo;
        const action = hasReaction ? removeReaction : (idArticle: string) => createReaction(idArticle, type);
        
        action(this.props.idArticle)
            .then(this.updateInternalState);
    };
}