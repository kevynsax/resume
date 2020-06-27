import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";
import About from "../about";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Blog from "../blog";
import {Helmet} from "react-helmet";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Helmet>
                <title>Kevyn Klava</title>
                <meta name="description" content="Full stack developer"/>
                <meta property="og:title"         content="Kevyn Klava" />
                <meta property="og:description"   content="Full stack developer" />
            </Helmet>
            <Cover />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>);
    };
}

