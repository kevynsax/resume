import React, {Component} from "react";
import {ContactForm} from "./contactForm";
import "./contact.scss";
import {getMenuId, MenuEnum} from "../../utils";

interface Info {
    label: string;
    description: string;
    isLink?: boolean;
}

const informations: Info[] = [
    {
        label: "Phone",
        description: "+1 (347) 349 5458"
    },
    {
        label: "Email",
        description: "kevynsax@gmail.com",
    },
    {
        label: "Linkedin",
        description: "linkedin.com/in/kevyn-klava-90a15364/",
        isLink: true
    },
    {
        label: "WhatsApp",
        description: "+55 (61) 98589 1092"
    },
];

export default class Contact extends Component{
    render = () => {
        return (
            <div className="contact section" id={getMenuId(MenuEnum.Contact)}>
                <div className="title">
                    <h1>Contact</h1>
                    <h6>Don't be afraid to contact, mainly if you want some help</h6>
                </div>
                <div className="contactBody">
                    <ContactForm />
                    <div className="information">
                        {informations.map(this.renderInfo)}
                    </div>
                </div>
            </div>
        )
    };

    renderInfo = (info: Info, index: number) => {
        return (
            <div key={index}>
                <span>{info.label}:</span>
                {!info.isLink ?
                    (<span>{info.description}</span>) :
                    (<a href={`https://www.${info.description}`} rel="noopener noreferrer" target="_blank" >{info.description}</a>)
                }
            </div>
        )
    }
}