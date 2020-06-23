import React, {Component} from "react";

const linkResumeEnglish = "/links/Kevyn%20Klava%20-%20Resume.pdf";

export default class DownloadButton extends Component<{styles?: string}>{
    render = () => (
        <a href={linkResumeEnglish} className={`btn ${this.props.styles}`} download>
            Download CV
        </a>
    )
}