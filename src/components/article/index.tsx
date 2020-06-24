import React, {Component} from "react";
import ReactMarkdown from "react-markdown";
import "./article.scss";

export default class Article extends Component{
    state = {
        markdown: "",
    };
    
    componentWillMount(): void {
        const article = require("src/assets/articles/how_to_create_a_docker_for_your_angular_project/english.md");
        fetch(article).then(res => res.text()).then(text => this.setState({markdown:text}));
    }

    render = () => {
        return (
            <div className="article section">
                <ReactMarkdown escapeHtml={false} source={this.state.markdown} />
            </div>
        );
    };
    
    componentDidMount(): void {
    }
}