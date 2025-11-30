import React, {Component} from "react";
import "./iconButton.scss";

export type typeIcon = 'arrow_back' | 'expand_more' | 'dislike' | 'like' | 'person' | 'share' | 'menu';

interface IconButtonProperties {
    name: typeIcon;
    onClick: VoidFunction;
    style?: string;
}

export default class IconButton extends Component<IconButtonProperties>{
    render = () => {
        const {name, onClick, style} = this.props;

        return (
            <div className={`iconButton ${style}`} onClick={onClick}>
                <img src={`/images/${name}.svg`} alt={name} className="icon"/>
            </div>
        )
    }
}
