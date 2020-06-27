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
        const {qttLines} = this.state;
        const showMore = this.qttWillShow < posts.length;
        
        const height = `${335*qttLines}px`;

        return (
            <div className="section articles" id={getMenuId(MenuEnum.Blog)}>
                <div className="title">
                    <h1>Blog</h1>
                    <h6>Some of the articles that I have written</h6>
                </div>
                <div className="posts" style={{maxHeight: height, height}}>
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

    private renderPost = (_: Post, index: number) => {
        const post = this.getPost(index);
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
    
    private getPost = (index: number): Post => {

        const {qttLines} = this.state;

        let i = 0;
        let newIndex = -1;
        for(let column = 0; column < qttPerLine; column++){
            for(let line = 0; line < qttLines; line++){
                const val = (line * qttPerLine) + column;

                if(i === index){
                    newIndex = val;
                }

                if(i > index){
                    break;
                }

                i++;
            }
        }

        return posts[newIndex];
    }

}