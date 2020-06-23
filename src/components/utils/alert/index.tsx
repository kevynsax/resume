import React, {Component} from "react";
import "./alert.scss"


export type alertType = 'success' | 'error';

export interface AlertProps {
    message: string;
    type: alertType;
    visible: boolean;
}

export class Alert extends Component<AlertProps> {
    render = () => {
        const messageVisibility = !this.props.visible ? 'hidden' : '';
        
        return (
            <div className={`alert ${this.props.type} ${messageVisibility}`}>
                {this.props.message}
            </div>
        );
    };
}