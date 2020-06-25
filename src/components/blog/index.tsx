import React, {Component} from "react";
import {getMenuId, MenuEnum} from "../../utils";

import DockerAngular from "src/assets/images/articles/docker_angular.png";
import DockerDotnet from "src/assets/images/articles/docker_dotnet_core.jpeg";
import DockerNode from "src/assets/images/articles/docker_node.jpeg";
import DockerReact from "src/assets/images/articles/docker_react.png";
import DockerVue from "src/assets/images/articles/docker_vue.png";
import ElementaryDocker from "src/assets/images/articles/elementary_docker.jpeg";
import LinuxServer from "src/assets/images/articles/linux_server.png";
import NodeOnLinux from "src/assets/images/articles/node_12_linux.jpeg";

import "./articles.scss";

interface Post {
    image: string;
    title: string;
    impression: string;
}

const posts: Post[] = [
    {
        image: DockerAngular,
        title: "Angular on Docker",
        impression: "Multi staging build using Node + Nginx images"
    },
    {
        image: LinuxServer,
        title: "Setting up Server linux",
        impression: "How I use Digital Ocean to serve all my applications"
    },
    {
        image: DockerDotnet,
        title: "Dotnet core WebApi on Docker",
        impression: "How to setup your dotnet web api on a docker alpine container"
    },
    {
        image: NodeOnLinux,
        title: "Install node on Linux",
        impression: "Installing newest versions of node on linux using node source code"
    },
    {
        image: DockerNode,
        title: "Node published on Docker container",
        impression: "Using docker to publish your node project"
    },    
    {
        image: DockerReact,
        title: "React Served on Nginx Container",
        impression: "How to setup Nginx alpine container to your React project"
    },
    {
        image: DockerVue,
        title: "Vue JS plus Docker",
        impression: "Vue JS project served using Nginx container"
    },
    {
        image: ElementaryDocker,
        title: "Docker on Elementary",
        impression: "Elementary OS is a cool distro but doesn't have the docs to install docker"
    },
];

const qttPerLine = 3;

export default class Blog extends Component {
    state = {
        whichPage: 1
    };
    
    private handleClickMore = () => {
        const page = this.state.whichPage + 1;
        this.setState({whichPage: page});
    };
    
    render = () => {
        const qttWillShow = this.state.whichPage * qttPerLine;
        const showMore = qttWillShow < posts.length;
        return (
            <div className="section articles" id={getMenuId(MenuEnum.Blog)}>
                <div className="title">
                    <h1>Blog</h1>
                    <h6>Some of the articles that I have written</h6>
                </div>
                <div className="posts">
                    {posts.slice(0, qttWillShow).map(this.renderPost)}
                </div>
                {showMore &&
                    <div className="more">
                        <span onClick={this.handleClickMore}>more...</span>
                    </div>
                }
            </div>
        )
    };

    private renderPost(post: Post, index: number) {
        return (
            <div>
                <div className="wrapperImage">
                    <img src={post.image} alt={post.title}/>
                </div>
                <span className="headline">{post.title}</span>
                <span className="subTitle">{post.impression}</span>
            </div>
           

        )
    };

}