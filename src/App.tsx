import React from 'react';
import Sidebar from "./components/sidebar";
import Body from "./components/body";
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <Sidebar/>
            <Body />
        </div>
    );
};

export default App;
