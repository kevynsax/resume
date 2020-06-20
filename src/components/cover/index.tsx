import React, {Component} from "react";
import CoverImage from "../../assets/images/cover.png";
import "./cover.scss";
import DownloadButton from "../utils/download_button";
import {getMenuId, MenuEnum} from "../../utils";

export default class Cover extends Component{
    render = () =>
        (
            <div className="coverSection" id={getMenuId(MenuEnum.Home)}>
                <img src={CoverImage} alt="Bicycles"/>
                <DownloadButton styles="btn-cover"/>
            </div>
        );
}
