import React, {Component} from "react";
import CoverImage from "../../assets/images/cover.png";
import "./cover.scss";
import DownloadButton from "../utils/download_button";
import {getMenuId, MenuEnum} from "../../utils";

interface CoverProps {
    image?: string;
    position?: string;
    buttonStyle?: 'outline' | 'solid';
}
const defaultPosition = "100% 25%";

export default class Cover extends Component<CoverProps>{
    render = () => {
        const {image, position, buttonStyle} = this.props;
        
        return (
            <div className="coverSection" id={getMenuId(MenuEnum.Home)}>
                <img src={image || CoverImage} style={{objectPosition: position || defaultPosition}} alt="Bicycles"/>
                <DownloadButton styles={`btnCover ${buttonStyle}`}/>
            </div>
        );
    };
}
