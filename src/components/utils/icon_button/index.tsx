import React, {Component} from "react";
import "./iconButton.scss";

interface IconButtonProperties {
    name: 'arrow_back' | 'expand_more' | 'dislike' | 'like' | 'person' | 'share';
    onClick: VoidFunction;
}

export default class IconButton extends Component<IconButtonProperties>{
    render = () => {
        const {name, onClick} = this.props;
        const Image = require(`src/assets/images/${name}.svg`);
        
        return (
            <div className="iconButton" onClick={onClick}>
                <img src={Image} alt={name}/> 
            </div>
        )
    }
}