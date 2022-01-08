import React from 'react';
import News from './News/News';
import Sidebar from './Sidebar/Sidebar';
import './Home.css';
import { useState } from 'react/cjs/react.development';

const Home = () => {
    const [tableView, setTableView] = useState('column')
    const handleTableView = (e) => {
        if(e === 'table'){
            setTableView('table');
        };
        if(e === 'column'){
            setTableView('column');
        }
        if(e === 'feedback'){
            setTableView('feedback')
        }
    }
    return (
        <div className="row home">
            <div className="col-md-2 sidebar">
                <Sidebar handleTableView={handleTableView} tableView={tableView}></Sidebar>
            </div>
            <div className="col-md-10">
                <News tableView={tableView}></News>
            </div>
        </div>
    );
};

export default Home;