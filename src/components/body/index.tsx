import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";
import Avatar from "../avatar";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Cover />
            <Avatar />
        </div>);
    };
}
