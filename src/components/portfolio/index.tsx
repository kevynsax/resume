import React, {Component} from "react";
import TimeCapsuleImage from "src/assets/images/projects/time-capsule.png";
import GoAndDoImage from "src/assets/images/projects/go-and-do.png";
import ILoveOurHomeImage from "src/assets/images/projects/i-love-our-home.png";
import StillHaveTimeImage from "src/assets/images/projects/still-have-time.png";
import JogomaticaImage from "src/assets/images/projects/jogomatica.png";
import WeddingsMapImage from "src/assets/images/projects/subscription-weddings-map.png";
import CacaNomesImage from "src/assets/images/projects/caca-nomes.png";
import GitHubImage from "src/assets/images/github.svg";
import EyeImage from "src/assets/images/eye.svg";

import "./portfolio.scss";
import {getMenuId, MenuEnum} from "../../utils";

interface Project {
    name: string;
    image: string;
    gitHubPath?: string;
    url: string;
}

const projects: Project[] = [
    {
        name: "Time Capsule",
        image: TimeCapsuleImage,
        gitHubPath: "https://github.com/capitalChurch/timeCapsule",
        url: "time-capsule"
    },
    {
        name: "I Love Our Home",
        image: ILoveOurHomeImage,
        gitHubPath: "https://github.com/capitalChurch/iLoveOurHome",
        url: "i-love-our-home"
    },
    {
        name: "Math Game",
        image: JogomaticaImage,
        gitHubPath: "https://github.com/kevynsax/jogomatica",
        url: "jogomatica"
    },
    {
        name: "Still Have Time",
        image: StillHaveTimeImage,
        gitHubPath: "https://github.com/capitalChurch/stillHaveTime",
        url: "still-have-time"
    },
    {
        name: "Go And Do",
        image: GoAndDoImage,
        gitHubPath: "https://github.com/capitalChurch/goDoFrontEnd",
        url: "go-and-do"
    },
    {
        name: "Weddings Map",
        image: WeddingsMapImage,
        url: "subscription-weddings-map"
    },
    {
        name: "Caça Nomes",
        image: CacaNomesImage,
        url: 'https://cacanomes.com'
    }
];

export default class Portfolio extends Component{
    render = () => (
        <div className="portfolio section" id={getMenuId(MenuEnum.Portfolio)}>
            <div className="title">
                <h1>Portfolio</h1>
                <h6>This is some of the public projects that I did</h6>
            </div>
            <div className="projects">
                {projects.map(this.renderProject)}
            </div>
        </div>
    );

    renderProject = (project: Project, index: number) => {
        return (
            <div key={index}>
                <div className="wrapperImage">
                    <img src={project.image} alt={project.name}/>
                    <div className="buttons">
                        {!!project.gitHubPath &&
                        <a href={project.gitHubPath} rel="noopener noreferrer" target="_blank">
                            <img src={GitHubImage} alt="GitHub" className="github" />
                        </a>
                        }
                        <a href={project.url} rel="noopener noreferrer" target="_blank">
                            <img src={EyeImage} alt={project.name}/>
                        </a>
                    </div>
                </div>
                <a className="name" rel="noopener noreferrer" href={project.url}>{project.name}</a>
            </div>
        )
    }
    
}
