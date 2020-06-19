import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";
import About from "../about";
import Skills from "../skills";
import Portfolio from "../portfolio";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Cover />
            <About />
            <Skills />
            <Portfolio />
        </div>);
    };
}
