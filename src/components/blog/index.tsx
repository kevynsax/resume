import React, {Component} from "react";
import {getMenuId, MenuEnum} from "../../utils";

import "./blog.scss";
import {Post, posts} from "../constants";
import IconButton from "../utils/icon_button";


const qttPerLine = 3;

export default class Blog extends Component {
    state = {
        qttLines: 1
    };

    private handleClickMore = () => {
        const line = this.state.qttLines + 1;
        this.setState({qttLines: line});
    };
    
    private get qttWillShow(): number {
        return Math.min(this.state.qttLines * qttPerLine, posts.length);
    }

    render = () => {
        const showMore = this.qttWillShow < posts.length;

        return (
            <div className="section articles" id={getMenuId(MenuEnum.Blog)}>
                <div className="title">
                    <h1>Blog</h1>
                    <h6>Some of the articles that I have written</h6>
                </div>
                <div className="posts">
                    {posts.slice(0, this.qttWillShow).map(this.renderPost)}
                </div>
                {showMore &&
                <div className="more">
                    <IconButton name={"expand_more"} onClick={this.handleClickMore} />
                </div>
                }
            </div>
        )
    };

    private renderPost = (post: Post, index: number) => {
        return (
            <div key={index}>
                <div className="cardPost" onClick={() => document.location.assign(`/blog/${post.id}`)}>
                    <div className="wrapperImage">
                        <img src={post.image} alt={post.title}/>
                    </div>
                    <span className="headline">{post.title}</span>
                    <span className="subTitle">{post.impression}</span>
                </div>
            </div>
        )
    };
}