import React, {Component} from "react";
import {Post, whatsappNumber} from "../constants";
import IconButton from "../utils/icon_button";
import {Modal} from "../utils/modal";
import Linkedin from "src/assets/images/linkedin-clean.svg";
import Facebook from "src/assets/images/facebook.svg";
import Twitter from "src/assets/images/twitter.svg";
import WhatsApp from "src/assets/images/whatsapp.svg";

import "./share.scss";

interface ShareButtonProps {
    article: Post
}

interface ShareSocialMedia {
    name: string;
    icon: string;
    url: string;
}

const text = "Look at this: \n";


export default class ShareButton extends Component<ShareButtonProps>{
    
    state = {show: false};
    
    private get text(): string{
        const url = document.location.href;
        const result = `${text}${this.props.article.title}\n${this.props.article.impression}\n${url}`;

        return encodeURI(result);
    }
    private get options(): ShareSocialMedia[]{
        const url = document.location.href;
        const {title, impression} = this.props.article;
        
        return [
            {
                name: "Facebook",
                url: `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`,
                icon: Facebook
            },
            {
                name: "Twitter",
                url: `https://twitter.com/intent/tweet?text=${this.text}`,
                icon: Twitter
            },
            {
                name: "Linkedin",
                url: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${impression}`,
                icon: Linkedin
            },
            {
                name: "Whatsapp",
                url: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${this.text}`,
                icon: WhatsApp
            }
        ]
    }
    
    render = () =>
        (
            <>
                <IconButton name={"share"} onClick={() => {
                    this.setState({show: true})
                }}/>
                <Modal show={this.state.show} className="shareOptions" handleClose={() => this.setState({show: false})}>
                    <h4>Share</h4>
                    <div className="options">
                        {this.options.map(this.renderSocialMedia)}
                    </div>
                </Modal>
            </>
        );
    
    renderSocialMedia = (socialMedia: ShareSocialMedia) => {
        return (
            <div className="option">
                <a key={socialMedia.name} target="_blank" rel="noopener noreferrer" href={socialMedia.url}>
                    <img src={socialMedia.icon} alt={socialMedia.name}/>
                </a>
            </div>
        )
    }
}
