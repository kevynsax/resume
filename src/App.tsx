import React from 'react';
import Sidebar from "./components/sidebar";
import Body from "./components/body";
import './app.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Article from "./components/article";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar/>
                <Switch>
                    <Route path="/" exact={true}>
                        <Body />
                    </Route>
                    <Route path="/blog/:idArticle">
                        <Article />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

type predicate<T> = (value: T, index: number, obj: T[]) => boolean;

declare global {
    export interface Array<T> {
        findOrFirst: (predicate: predicate<T>) => T;
    }
}

Array.prototype.findOrFirst = function<T>(this: T[], predicate: predicate<T>){
    const result = this.find(predicate);
    return result || this[0];
};