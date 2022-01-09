import React, { useEffect, useState } from 'react';
import './Newsstyle.css';
import { ImCross } from 'react-icons/im'
import { NavLink } from 'react-router-dom';

const Newsstyle = ({ post, handleDelete }) => {
    const [image, setImage] = useState('');
    const { id, title, body } = post;
    const slicedBody = body.slice(0, 70);
    const slicedTitle = title.slice(0, 50);
    // console.log(sliced);

    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(result => setImage(result.results[0].picture.medium));
    }, []);

    // console.log(image)
    return (
        <NavLink to={`/post/${id}`} className='nav-link'>
            <div className='newsStyle-container offset-md-2 d-flex pt-4 mt-2 w-75'>
                <div className='posts-profile m-3'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h5>{slicedTitle}</h5>
                    <h6>{slicedBody}...</h6>
                    <p>Mon, 21 Dec 2020 14:57 GMT</p>
                </div>
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    handleDelete(id)
                }}><ImCross className='cross-icon' style={{ color: 'red', fontSize: '25px' }}></ImCross>
                </a>
            </div>
        </NavLink>
    );
};

export default Newsstyle;