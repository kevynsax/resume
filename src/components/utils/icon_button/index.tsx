import React, {Component} from "react";
import "./iconButton.scss";

export type typeIcon = 'arrow_back' | 'expand_more' | 'dislike' | 'like' | 'person' | 'share';

interface IconButtonProperties {
    name: typeIcon;
    onClick: VoidFunction;
    style?: string;
}

export default class IconButton extends Component<IconButtonProperties>{
    render = () => {
        const {name, onClick, style} = this.props;
        const Image = require(`src/assets/images/${name}.svg`);
        
        return (
            <div className={`iconButton ${style}`} onClick={onClick}>
                <img src={Image} alt={name}/> 
            </div>
        )
    }
}