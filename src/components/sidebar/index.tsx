import React, {Component} from "react";
import Linkedin from '../../assets/images/linkedin.png';
import GitHub from '../../assets/images/github.svg';
import './sidebar.scss';

interface SocialMedia {
    component: any;
    label: string;
    link: string;
}

const menus: string[] = [
    'home', 'about', 'skills', 'portfolio', 'posts', 'contact'
];

const socialMedias: SocialMedia[] = [
    {component: Linkedin, label: 'Linkedin', link: 'https://www.linkedin.com/in/kevyn-klava-90a15364/'},
    {component: GitHub, label: 'Git Hub', link: 'https://github.com/kevynsax'}
];

export default class Sidebar extends Component {
    renderMenu = (item: string, i: number) =>
        (<span key={i}>{item}</span>);

    renderSocialMedia = (item: SocialMedia, i: number) =>
        (<div key={i} onClick={() => this.openNewTab(item.link)}>
            <img src={item.component} alt={item.label}/>
        </div>);

    openNewTab = (link: string) =>
        window.open(link);

    render = () => {
        return (
            <div className='sidebar'>
                <div className="title">
                    <h1>Klava</h1>
                    <div>Kevyn Klava</div>
                </div>
                <div className="menu">
                    {menus.map(this.renderMenu)}
                </div>
                <div className="socialMedia">
                    {socialMedias.map(this.renderSocialMedia)}
                </div>
            </div>
        )
    }
}
