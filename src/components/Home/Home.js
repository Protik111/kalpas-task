import React from 'react';
import News from './News/News';
import Sidebar from './Sidebar/Sidebar';
import './Home.css';

const Home = () => {
    return (
        <div className="row home">
            <div className="col-md-2 sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <News></News>
            </div>
        </div>
    );
};

export default Home;