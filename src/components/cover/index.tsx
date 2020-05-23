import React, {Component} from "react";
import CoverImage from "../../assets/images/cover.png";
import "./cover.scss";
import DownloadButton from "../utils/download_button";

export default class Cover extends Component{
    render = () =>
        (
            <div className="coverSection">
                <img src={CoverImage} alt="Bicycles"/>
                <DownloadButton styles="btn-cover"/>
            </div>
        );
}
