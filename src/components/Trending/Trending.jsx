import React, { useState, useEffect } from 'react';
import './trending.css';

import apiConfig from '../../api/apiConfig';

const Trending = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `${apiConfig.baseUrl}post?limit=6`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'app-id': apiConfig.apiKey, 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setPosts(data.data);
    };
    fetchApi();
  }, []);

  return (
    <div className="trending">
      <h3>TRENDING tại diễn đàn</h3>
      <div className="card__container">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div className="card__info">
              <a href="/">{` ${post.owner.firstName} đã đăng trong ${post.tags[2]}`}</a>
              <a href="/" className="card__info--title">
                {post.text}
              </a>
              <p className="card__info--status">{`${post.publishDate} ${post.likes} Views`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
