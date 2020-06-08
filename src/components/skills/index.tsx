import React, {Component} from "react";
import "./skills.scss";
import Slider from "../utils/slider";

export interface Skill {
    label: string;
    evaluation: number;
}

export interface GroupSkill {
    title: string;
    skills: Skill[];
}

const skills: GroupSkill[] = [
    {
        title: "Back-end",
        skills: [
            {
                label: "NodeJs",
                evaluation: .7
            },
            {
                label: "Dotnet - C#",
                evaluation: .9
            },
            {
                label: "Java",
                evaluation: .35
            }
        ]
    },
    {
        title: "Front-end",
        skills: [
            {
                label: "VueJS",
                evaluation: .85
            },
            {
                label: "React",
                evaluation: .9
            },
            {
                label: "Angular",
                evaluation: .7
            },
            {
                label: "Html/Css",
                evaluation: .95
            },
            {
                label: "Jquery",
                evaluation: .5
            },
            {
                label: "AngularJs",
                evaluation: .55
            }
        ]
    },
    {
        title: "Others",
        skills: [
            {
                label: "Selenium",
                evaluation: .65
            },
            {
                label: "Flutter/Dart",
                evaluation: .35
            },
            {
                label: "Rust",
                evaluation: .1
            },
            {
                label: "Scrum",
                evaluation: .6
            },
            {
                label: "TDD",
                evaluation: .85
            },
            {
                label: "Docker",
                evaluation: .8
            },
            {
                label: "Kubernets/Swarm",
                evaluation: .5
            },
            {
                label: "Clouds(Azure/Aws/Google Cloud)",
                evaluation: .65
            }
        ]
    }
];

export default class Skills extends Component{
    render = () => {
        return (
            <div className="skills section">
                <div className="title">
                    <h1>Skills</h1>
                    <h6>How I evaluate myself</h6>
                </div>
                <div className="evaluations">
                    {skills.map(this.renderGroupSkill)}
                </div>
            </div>
        );
    }
    
    renderGroupSkill = (group: GroupSkill, index: number) => {
        return (
            <div key={index}>
                <h3>{group.title}</h3>
                <div className="groupSkill">
                    {group.skills.map(this.renderSkill)}
                </div>
            </div>
        )
    }
    
    renderSkill = (skill: Skill, index: number) => {
        return (
            <div className="skill" key={index}>
                <Slider percentage={skill.evaluation} />
            </div>
        )
    }
}