import React, {Component} from "react";
import './about.scss';
import DownloadButton from "../utils/download_button";
import Avatar from 'src/assets/images/avatar.png';

interface Info {
    label: string;
    value: string;
}

export default class About extends Component {
    render = () => {

        const today = new Date() as any;
        const birthDay = new Date(1993, 4, 13) as any;

        const diffTime = today - birthDay;

        const age = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.4));

        const infos: Info[] = [
            {label: "Name", value: "Kevyn Klava"},
            {label: "Age", value: age.toString()},
            {label: "Email", value: "kevynsax@gmail.com"},
            {label: "From", value: "Brasilia, Brazil"},
        ];

        return (
            <div className="aboutSection">
                <div className="title">
                    <h1>About me</h1>
                    <h6>Get to know me</h6>
                </div>

                <div className="bodyAbout">
                    <div className="pictureWrapper">
                        <div className="picture">
                            <img src={Avatar} alt=""/>
                        </div>
                    </div>

                    <div className="texts">
                        <h5>let me introduce my self</h5>
                        <h3>I'm Kevyn Klava, a Full Stack Developer focused on .Net and NodeJs on the backend</h3>
                        <div className="text">
                            I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI
                            designs
                            and websites for years, which comply with the latest design trends. I help convert a vision
                            and
                            an idea into meaningful and useful products. Having a sharp eye for product evolution helps
                            me
                            prioritize tasks, iterate fast and deliver faster.
                        </div>

                        <div className="infos">
                            {infos.map(this.renderInfo)}
                        </div>
                        <div className="actions">
                            <DownloadButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    renderInfo = (info: Info, index: number) => (
        <div className="info" key={index}>
            <span>{info.label}: </span>
            <span>{info.value}</span>
        </div>
    )
}