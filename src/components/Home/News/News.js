import React, { useEffect, useState } from 'react';
import NewsStyle from '../../NewsStyle/NewsStyle';
import Pagination from '../../Pagination/Pagination';
import './News.css';


const News = () => {
    const [posts, setposts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => setposts(result));
    }, []);

    const lastIndexOfPage = postPerPage * currentPage;
    const firstIndexOfPage = lastIndexOfPage - postPerPage;

    const slicedPosts = posts.slice(firstIndexOfPage, lastIndexOfPage);

    const handlePaginate = (number) => {
        setCurrentPage(number);
    }

    // console.log(posts);
    return (
        <div className='news-container pt-4'>
            <div>
                {slicedPosts.map(post => <NewsStyle post={post} key={post.id}></NewsStyle>)}
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <Pagination postPerPage={postPerPage} totalPost={15} handlePaginate={handlePaginate}></Pagination>
            </div>
        </div>
    );
};

export default News;