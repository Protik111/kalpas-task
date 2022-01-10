import React, { useEffect, useState } from 'react';
import './Newsstyletable.css';
import { ImCross } from 'react-icons/im'
import { NavLink } from 'react-router-dom';

const Newsstyletable = ({post, handleDelete}) => {
    const [image, setImage] = useState('');
    const { id, title, body } = post;
    const slicedBody = body.slice(0, 50);
    const slicedTitle = title.slice(0, 55);

    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(result => setImage(result.results[0].picture.large));
    }, []);
    return (
        <NavLink to={`/post/${id}`} className="nav-link table-view card col-md-3 m-2 px-3 py-4">
            <div className="card-body">
                <h5 className="card-title">{slicedTitle}...</h5>
                <p className="card-text">{slicedBody}...</p>
                <p className="card-text"><small className="text-muted">Mon, 21 Dec 2020 14:57 GMT</small></p>
            </div>
            <img className="card-img-top" src={image} alt="" />
            <div>
            <a href="" onClick={(e) => {
                e.preventDefault();
                handleDelete(id)
            }}><ImCross className='cross-icon2' style={{ color: 'red', fontSize: '25px' }}></ImCross>
            </a>
            </div>
        </NavLink>
    );
};

export default Newsstyletable;