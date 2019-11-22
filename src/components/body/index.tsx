import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Cover />
        </div>);
    };
}
