import React, {Component} from "react";
import ReactMarkdown from "react-markdown";
import "./article.scss";
import {RouteComponentProps, withRouter} from "react-router";
import {Post, posts} from "../constants";
import Cover from "../cover";
import IconButton from "../utils/icon_button";


interface ArticleQueryParam {
    idArticle: string;
}

class Article extends Component<RouteComponentProps<ArticleQueryParam>>{
    state = {
        markdown: "",
    };
    
    private get article(): Post{
        const {idArticle} = this.props.match.params;
        return posts.findOrFirst(x => x.id === idArticle);
    }
    
    public componentWillMount(): void {
        const { idArticle } = this.props.match.params;
        const article = require(`src/assets/articles/${idArticle}/english.md`);
        
        fetch(article)
            .then(res => res.text())
            .then(text => this.setState({markdown: text}));
    }
    
    public render = () => {
        return (
            <div className="article">
                <Cover image={this.article.image} position="100% 40%" buttonStyle={"solid"}/>

                <div className="actionBar">
                    <div className="leading">
                        <IconButton name={"arrow_back"} onClick={this.props.history.goBack}/>
                    </div>
                    <div className="actions">
                        <IconButton name={"person"} onClick={() => {document.location.assign(`/#about`);
                        }} />
                        <IconButton name={"dislike"} onClick={() => {}} />
                        <IconButton name={"like"} onClick={() => {}} />
                        <IconButton name={"share"} onClick={() => {}} />
                    </div>
                </div>
                
                <div className="section">
                    <ReactMarkdown escapeHtml={false} source={this.state.markdown} />
                </div>
            </div>
        );
    };
}

export default withRouter(Article);