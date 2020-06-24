import React, {Component} from "react";
import "./contactForm.scss"
import {TextField} from "../utils/textField";
import {Button} from "../utils/button";
import {Alert, AlertProps, alertType} from "../utils/alert";

const url = '/send-email';

interface ContactFormState {
    form: {
        name: string;
        email: string;
        message: string;
    },
    alert: AlertProps
}

const initialState: ContactFormState = {
    form:{
        name: "",
        email: "",
        message: "",
    },
    alert: {
        message: '',
        type: 'success',
        visible: false
    }
};

export class ContactForm extends Component<{}, ContactFormState> {
    state = initialState;

    sendEmail = () => {
        this.hideAlert();
        const {form} = this.state;
        
        const body = {
            from:{
                name: form.name,
                email: form.email 
            },
            to:  {
                name: 'Kevyn Klava',
               email: 'kevynsax@gmail.com' 
            },
            text: form.message,
            subject: 'Mensagem enviada do resume'
        };
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if(res.status > 399){
                this.showAlert('error', "Error sending message");
                console.log(res.body);
                return;
            }
            
            this.showAlert('success', 'Message successfully sent');
        });
    };
    
    showAlert = (type: alertType, message: string) => {
        const alert: AlertProps = {
            visible: true,
            message,
            type
        };
        
        this.setState({alert});        
    };
    
    hideAlert = () => {
        const alert = {
            visible: false,
        }as AlertProps ;
        
        this.setState({alert});
    };

    
    updateField = (prop: 'name' | 'email' | 'message', value: string) => {
        const {form} = this.state;
        form[prop] = value;
        this.setState({form});
    };
    
    render = () => {
        const {alert} = this.state;
        
        return (
            <div className="contactForm">
                <TextField
                    label="Name"
                    placeHolder="John Doe"
                    onChange={(name) => this.updateField('name', name)}/>

                <TextField
                    label="Email"
                    placeHolder="contact@johndoe.com"
                    onChange={email => this.updateField('email', email)}/>

                <TextField 
                    label="Message" 
                    placeHolder="How can I help you, today?"
                    onChange={message => this.updateField('message', message)} 
                    multipleLines={true}/>
                    
                <div className="action">
                    <Button label="Send" onClick={this.sendEmail}/>
                    <Alert message={alert.message} type={alert.type} visible={alert.visible}/>
                </div>
            </div>
        )
    };
}