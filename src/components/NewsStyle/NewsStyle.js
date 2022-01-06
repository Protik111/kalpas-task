import React, { useEffect, useState } from 'react';
import './NewsStyle.css';
import { ImCross } from 'react-icons/im'

const NewsStyle = (props) => {
    const [image, setImage] = useState('');
    const { userId, id, title, body } = props.post;
    const sliced = body.slice(0, 70);
    console.log(sliced);

    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
            .then(res => res.json())
            .then(result => setImage(result.results[0].picture.medium));
    }, []);

    // console.log(image)
    return (
        <div>
            <div className='newsStyle-container offset-md-3 d-flex pt-4 mt-2 w-75'>
                <div className='posts-profile m-3'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h5>{title}</h5>
                    <h6>{sliced}...</h6>
                    <p>Mon, 21 Dec 2020 14:57 GMT</p>
                </div>
            </div>
            <div classname='cross-btn'>
                <ImCross style={{ color: 'red', fontSize: '25px' }}></ImCross>
            </div>
        </div>
    );
};

export default NewsStyle;