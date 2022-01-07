import React, { useState } from 'react';
import './Sidebar.css'
import profile from '../../../images/profile.jpg'
import { HiViewList } from 'react-icons/hi';
import { ImTable } from 'react-icons/im';


const Sidebar = ({handleTableView}) => {
    const [active, setActive] = useState('');
    const [firstActive, setFirstActive] = useState(true);
    const handleToggle = (e) => {
        if (e === 'table') {
            setActive('table')
            setFirstActive(!firstActive);
        }
        if (e === 'column') {
            setFirstActive(true);
            setActive('');
        }
    }
    return (
        <div className='sidebar-container'>
            <div className='profile-container d-flex justify-content-around mx-5 mt-5 py-1'>
                <div className='profile-photo'>
                    <img src={profile} alt="" />
                </div>
                <div className='profile-info'>
                    <h4><bold>Hi Reader,</bold></h4>
                    <h6><bold>Here is your News</bold></h6>
                </div>
            </div>

            <div className='toggle-container mx-5 mt-5 py-1'>
                <div className='view-toggle mt-2'>
                    <h2>View Toggle</h2>
                </div>
                <div className='toggle-icon d-flex justify-content-center'>
                    <div className={`${active === 'table' ? 'active' : ''} icon w-50`}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            handleToggle('table');
                            handleTableView('table');
                        }} href=""><ImTable></ImTable></a>
                    </div>
                    <div className={`icon w-50 ${firstActive === true ? 'active' : ''}`}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            handleToggle('column');
                            handleTableView('column')
                        }} href=""><HiViewList></HiViewList></a>
                    </div>
                </div>
            </div>

            <div className='feedback-container mx-5 mt-5 py-1 text-center'>
                <div className='feedback-tag mt-2'>
                    <h3><bold>Have A Feedback?</bold></h3>
                </div>
                <div className='feedback-listening'>
                    <h4>We are listening</h4>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;