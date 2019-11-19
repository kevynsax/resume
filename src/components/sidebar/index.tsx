import React from "react";
import './sidebar.scss';

const menus: string[] = [
    'home', 'about', 'services', 'portfolio', 'news', 'contact'
];

export default class Sidebar extends React.Component {
    renderMenu = (item: string, i: number) =>
        (<span key={i}>{item}</span>);

    render = () => {
        return (
            <div className='sidebar'>
                <div className="title">
                    <div>Klava</div>
                    <div>Kevyn Klava</div>
                </div>
                <div className="menu">
                    {menus.map(this.renderMenu)}
                </div>
            </div>
        )
    }
}
