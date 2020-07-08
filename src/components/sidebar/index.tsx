import React, {Component} from "react";
import Linkedin from '../../assets/images/linkedin.png';
import GitHub from '../../assets/images/github.svg';
import './sidebar.scss';
import {getMenuId, menus} from "../../utils";
import IconButton from "../utils/icon_button";

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
    state= {
        active: '',
        opened: false
    };
    
    private activateMenu = (item: string): void => {
        document.location.assign(`/#${item}`);
        this.setState({active: item, opened: false});
    };

    private openNewTab = (link: string): void => {
        window.open(link);
        this.setState({opened: false});
    };
    
    private renderMenu = (item: string, i: number) => (
        <span key={i} onClick={() => this.activateMenu(item)} className={this.state.active === item ? 'active' : ''}>{item}</span>);

    private renderSocialMedia = (item: SocialMedia, i: number) =>
        (<div key={i} onClick={() => this.openNewTab(item.link)}>
            <img src={item.component} alt={item.label} className="icon"/>
        </div>);

    render = () => {
        const {opened} = this.state;
        return (
            <div className={`sidebar ${opened ? "" : "hide"}`}>
                <div className="iconMenu">
                    <IconButton name='menu' onClick={() => this.setState({opened: !opened})}/>
                </div>
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
