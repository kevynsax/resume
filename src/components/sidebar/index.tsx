import React, {Component} from "react";
import Linkedin from '../../assets/images/linkedin.png';
import GitHub from '../../assets/images/github.svg';
import './sidebar.scss';
import {getMenuId, menus} from "../../utils";

interface SocialMedia {
    component: any;
    label: string;
    link: string;
}

const socialMedias: SocialMedia[] = [
    {component: Linkedin, label: 'Linkedin', link: 'https://www.linkedin.com/in/kevyn-klava-90a15364/'},
    {component: GitHub, label: 'Git Hub', link: 'https://github.com/kevynsax'}
];

export default class Sidebar extends Component {
    private renderMenu = (item: string, i: number) => 
        (<a key={i} href={`#${item}`}>{item}</a>);

    private renderSocialMedia = (item: SocialMedia, i: number) =>
        (<div key={i} onClick={() => this.openNewTab(item.link)}>
            <img src={item.component} alt={item.label}/>
        </div>);

    private openNewTab = (link: string) =>
        window.open(link);

    render = () => {
        return (
            <div className='sidebar'>
                <div className="title">
                    <h1>Klava</h1>
                    <div>Kevyn Klava</div>
                </div>
                <div className="menu">
                    {menus.map((x, i) => this.renderMenu(getMenuId(x.type), i))}
                </div>
                <div className="socialMedia">
                    {socialMedias.map(this.renderSocialMedia)}
                </div>
            </div>
        )
    }
}
