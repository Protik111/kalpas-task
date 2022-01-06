import React, { useEffect, useState } from 'react';
import NewsStyle from '../../NewsStyle/NewsStyle';
import './News.css';


const News = () => {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => setposts(result));
    }, []);


    // console.log(posts);
    return (
        <div className='news-container pt-4'>
            <div>
                {posts.map(post => <NewsStyle post={post} key={post.id}></NewsStyle>)}
            </div>
        </div>
    );
};

export default News;