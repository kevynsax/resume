import React, {Component} from "react";
import {ContactForm} from "./contactForm";
import "./contact.scss";
import {getMenuId, MenuEnum} from "../../utils";
import {whatsappNumber} from "../constants";

interface Info {
    label: string;
    description: string;
    link: string;
    newTab?: boolean;
}

const informations: Info[] = [
    {
        label: "Phone",
        description: "+1 (347) 349 5458",
        link: "tel:+1 (347) 349 5458"
    },
    {
        label: "Email",
        description: "kevynsax@gmail.com",
        link: 'mailto:kevynsax@gmail.com'
    },
    {
        label: "Linkedin",
        description: "kevyn-klava",
        link: "https://www.linkedin.com/in/kevyn-klava-90a15364/",
        newTab: true
    },
    {
        label: "WhatsApp",
        description: "+55 (61) 98589 1092",
        link: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hi%20Kevyn%2C%20I%20saw%20your%20resume%20and%20I%20was%20wondering%20if%20we%20can%20schedule%20a%20meeting`,
        newTab: true
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
                    <div className="information">
                        {informations.map(this.renderInfo)}
                    </div>
                    <ContactForm />
                </div>
            </div>
        )
    };

    renderInfo = (info: Info, index: number) => {
        return (
            <div key={index}>
                <span>{info.label}:</span>
                <a href={info.link} rel="noopener noreferrer" target={info.newTab ? "_blank" : ""} >{info.description}</a>
            </div>
        )
    }
}