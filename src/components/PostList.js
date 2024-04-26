import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import Pagination from './Pagination';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=6`
        );
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleRemoveCard = id => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
  };

  return (
    <div className="post-list">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="row">
            {posts.map(post => (
              <div key={post.id} className="col-md-4 mb-4">
                <PostCard post={post} onRemove={handleRemoveCard} />
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </>
      )}
    </div>
  );
};

export default PostList;
