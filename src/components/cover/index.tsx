import React, {Component} from "react";
import CoverImage from "../../assets/images/cover.png";
import "./cover.scss";

export default class Cover extends Component{
    render = () => {
        return (<div className="coverSection">
            <img src={CoverImage} alt="Bicycles"/>
        </div>)
    };
}
