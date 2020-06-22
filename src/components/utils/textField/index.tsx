import React, {ChangeEventHandler, Component} from "react";
import "./textField.scss";

interface TextFieldProps {
    label: string;
    placeHolder: string;
    onChange: (val: string) => void;
    multipleLines?: boolean
}

export class TextField extends Component<TextFieldProps> {
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (el) => {
        this.props.onChange(el.target.value);
    };
    
    render = () => {
        
        return (
            <div className="formItem">
                <span className="label">{this.props.label}</span>
                {!this.props.multipleLines ?
                    (<input type="text" placeholder={this.props.placeHolder} onChange={this.handleChange}/>) :
                    (<textarea placeholder={this.props.placeHolder} onChange={this.handleChange} rows={8}/>)
                }
            </div>
        )
    }
}