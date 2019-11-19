import React from 'react';
import Sidebar from "./components/sidebar";
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar></Sidebar>
    </div>
  );
};

export default App;
