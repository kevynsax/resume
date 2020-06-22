import React, {Component} from "react";
import "./contactForm.scss"
import {TextField} from "../utils/textField";

export class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    render = () => {
        return (
            <div className="contactForm">
                <TextField
                    label="Name"
                    placeHolder="Fill with your name"
                    onChange={(name) => this.state = {...this.state, name: name}}/>

                <TextField
                    label="Email"
                    placeHolder="Fill with your email"
                    onChange={email => this.setState({email})}/>

                <TextField 
                    label="Message" 
                    placeHolder="Enter a message that describes how can I help you"
                    onChange={message => this.setState({message})} 
                    multipleLines={true}/>
            </div>
        )
    }
}