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

const skillGroup: GroupSkill[] = [
    {
        title: "Back-end",
        skills: [
            {
                label: "NodeJs",
                evaluation: .76
            },
            {
                label: "Dotnet - C#",
                evaluation: .91
            },
            {
                label: "Java",
                evaluation: .33
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
                evaluation: .92
            },
            {
                label: "Angular",
                evaluation: .77
            },
            {
                label: "Html/Css",
                evaluation: .95
            },
            {
                label: "Jquery",
                evaluation: .53
            },
            {
                label: "AngularJs",
                evaluation: .59
            }
        ]
    },
    {
        title: "Others",
        skills: [
            {
                label: "Selenium",
                evaluation: .68
            },
            {
                label: "Flutter/Dart",
                evaluation: .39
            },
            {
                label: "Rust",
                evaluation: .13
            },
            {
                label: "Scrum",
                evaluation: .87
            },
            {
                label: "TDD",
                evaluation: .83
            },
            {
                label: "Docker",
                evaluation: .89
            },
            {
                label: "Kubernets/Swarm",
                evaluation: .59
            },
            {
                label: "Clouds(Azure/Aws/Google Cloud)",
                evaluation: .68
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
                    {skillGroup.map(this.renderGroupSkill)}
                </div>
            </div>
        );
    };
    
    renderGroupSkill = (group: GroupSkill, index: number) => {
        return (
            <div key={index}>
                <h3>{group.title}</h3>
                <div className="skillGroup">
                    {group.skills.map(this.renderSkill)}
                </div>
            </div>
        )
    };
    
    renderSkill = (skill: Skill, index: number) => {
        return (
            <div className="skill" key={index}>
                <div className="label">
                    <span>{skill.label}</span>
                    <span className="evaluation">{Math.floor(skill.evaluation * 100)}%</span>
                </div>
                <Slider percentage={skill.evaluation} />
            </div>
        )
    };
}