import React, {Component} from "react";
import marked from 'marked';

export class Articles extends Component{
    state = {
        markdown: ""
    };
    
    componentDidMount(): void {
        const path = require("../../assets/articles/how_to_create_a_docker_for_your_angular_project/english.md");
        
        fetch(path)
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({
                    markdown: marked(text)
                })
            })
    }

    render = () => {
        return (
            <article dangerouslySetInnerHTML={{__html: this.state.markdown}} />
        )
    }
}