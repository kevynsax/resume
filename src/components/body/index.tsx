import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";
import About from "../about";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Cover />
            <About />
        </div>);
    };
}
