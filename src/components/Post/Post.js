import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const [post, setPost] = useState([])
    const { id } = useParams();
    console.log('id', id);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(result => setPost(result));
    }, [id]);

    return (
        <div className='newsStyle-container pt-4 w-100 post'>
            {/* <div className='posts-profile m-3'>
                <img src={image} alt="" />
            </div> */}
            <div>
                <h5>News Title: {post.title}</h5>
                <h6>News Decription: {post.body}...</h6>
                <p>Time : Mon, 21 Dec 2020 14:57 GMT</p>
            </div>
            <br />
            <NavLink to="/" className='d-flex justify-content-center'>
            <button type="button" class="btn btn-primary">Go Home</button>
            </NavLink>
        </div>
    );
};

export default Post;