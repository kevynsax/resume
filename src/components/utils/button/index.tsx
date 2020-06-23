import React, {Component} from "react";



interface ButtonProps {
    label: string;
    onClick: () => void;
}


export class Button extends Component<ButtonProps> {
    render = () =>
        (
            <button type="button" className='btn' onClick={this.props.onClick}>{this.props.label}</button>
        );
}