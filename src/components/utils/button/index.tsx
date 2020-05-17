import React, {Component} from "react";
import './button.scss';

export default class Button extends Component{
    render = () => (
        <button className="btn">
            {this.props.children}
        </button>
    )
}