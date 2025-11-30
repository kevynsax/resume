import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import "./article.scss";
import {useParams, useNavigate} from "react-router-dom";
import {Post, posts} from "../constants";
import Cover from "../cover";
import IconButton from "../utils/icon_button";
import {Helmet} from "react-helmet";
import ShareButton from "./shareButton";
import {ReactionComponent as Reaction} from "./reaction";


interface ArticleQueryParam {
    idArticle: string;
}

const Article: React.FC = () => {
    const params = useParams<ArticleQueryParam>();
    const navigate = useNavigate();
    const [markdown, setMarkdown] = useState("");

    const idArticle = params.idArticle!;

    const article: Post = posts.findOrFirst(x => x.id === idArticle);

    useEffect(() => {
        fetch(`/assets/articles/${idArticle}/english.md`)
            .then(res => res.text())
            .then(text => setMarkdown(text));
    }, [idArticle]);

    return (
        <div className="article">
            <Helmet>
                <title>{article.title}</title>
                <meta name="description" content={article.impression}/>
                <meta property="og:title"         content={article.title} />
                <meta property="og:description"   content={article.impression} />
            </Helmet>
            <Cover image={article.image} position="100% 40%" buttonStyle={"outline"}/>

            <div className="actionBar">
                <div className="leading">
                    <IconButton name={"arrow_back"} onClick={() => navigate(-1)}/>
                </div>
                <div className="actions">
                    <IconButton name={"person"} onClick={() => document.location.assign(`/#about`)}/>
                    <Reaction idArticle={article.id}/>
                    <ShareButton article={article} />
                </div>
            </div>

            <div className="section">
                <ReactMarkdown escapeHtml={false} source={markdown} />
            </div>
        </div>
    );
}

export default Article;
