import React, {Component} from "react";
import AvatarImage from 'src/assets/images/avatar.png'; 
import './avatar.scss';

export default class Avatar extends Component{
    render = () => (
        <div className="avatar">
            <img src={AvatarImage} alt="Kevyn Klava"/>
        </div>
    )
}