import React, {Component} from "react";
import './download_button.scss';

const linkResumeEnglish = "/links/Kevyn%20Klava%20-%20Resume.pdf";
export default class DownloadButton extends Component{
    render = () => (
        <a href={linkResumeEnglish} className="btn" download>
            Download CV
        </a>
    )
}