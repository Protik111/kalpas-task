import React, { useEffect, useState } from 'react';
import Feedback from '../../Feedback/Feedback';
import Newsstyle from '../../Newsstyle/Newsstyle';
import Newsstyletable from '../../Newsstyletable/Newsstyletable';
import Pagination from '../../Pagination/Pagination';
import './News.css';


const News = ({ tableView }) => {
    const [firstRender, setFirstRender] = useState(true);
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

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        .then(result => {
            if(result.status !== 200){
                return
            }else{
                setposts(posts.filter(post => {
                    return post.id !== id;
                }))
            }
        })
    } 
    return (
        <div className='news-container pt-4'>
            { tableView === 'column' && <div>
                {slicedPosts.map(post => <Newsstyle post={post} key={post.id} handleDelete={handleDelete}></Newsstyle>)}
            </div>}
            { tableView === 'table' && <div className='row offset-md-2'>
            {slicedPosts.map(post => <Newsstyletable post={post} key={post.id} handleDelete={handleDelete}></Newsstyletable>)}
            </div>}
            {tableView === 'feedback' && <div className='row offset-md-3'>
                <Feedback></Feedback>
                </div>}
            {tableView !== 'feedback' && <div className='d-flex justify-content-center mt-3'>
                <Pagination postPerPage={postPerPage} totalPost={15} handlePaginate={handlePaginate}></Pagination>
            </div>}
        </div>
    );
};

export default News;