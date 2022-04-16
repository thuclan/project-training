import React, { useState, useEffect } from 'react';
import './trending.css';

import apiConfig from '../../api/apiConfig';

import convertDate from '../../utils/ConvertDate';

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
              <a href="/">
                <span> {post.owner.firstName}</span> đã đăng trong <span>{post.tags[0]}</span>
              </a>
              <a href="/" className="card__info--title">
                {post.text}
              </a>
              <p className="card__info--status">
                {convertDate(post.publishDate)}&nbsp;&nbsp;&bull;&nbsp;&nbsp;
                {post.likes} Lượt xem
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
