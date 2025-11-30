import React from 'react';
import Sidebar from "./components/sidebar";
import Body from "./components/body";
import './app.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Article from "./components/article";

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/blog/:idArticle" element={<Article />} />
                </Routes>
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
