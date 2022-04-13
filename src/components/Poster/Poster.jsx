import React, { useState, useEffect } from 'react';
import './poster.css';

import apiConfig from '../../api/apiConfig';

const Poster = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(apiConfig.baseUrl, {
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
          <div className="card">
            <div key={post.id} className="card__info">
              <span>{` ${post.owner.firstName} đã đăng trong ${post.tags[2]}`}</span>
              <p className="card__info--title">{post.text}</p>
              <p className="card__info--status">{`${post.publishDate}   ${post.likes} Views`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poster;
