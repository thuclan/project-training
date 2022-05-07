import React, { useState, useEffect } from 'react';
import './postofcate.css';
import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import convertDate from '../../utils/ConvertDate';
import { cates } from '../New/New';

const PostOfCate = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchApiTag = async () => {
      const url = `${apiConfig.baseUrl}tag/water/post?limit=10`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'app-id': apiConfig.apiKey, 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setPosts(data.data);
    };
    fetchApiTag();
  }, []);

  console.log(posts);

  return (
    <div className="new__box">
      <div className="news">
        <h3>Bản tin</h3>
        {posts.map((item) => (
          <div className="new__card" key={item.id}>
            <a className="new__card--title" href="/">
              {item.text}
            </a>
            <a className="new__card--status" href="/">
              {convertDate(item.publishDate)} &nbsp;&nbsp;&nbsp;&nbsp; Đăng bởi{' '}
              <span>{item.owner.lastName}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="topics">
        <h3>Chủ đề</h3>
        {cates.map((cate) => (
          <div className="topic__card" key={cate.nameCate}>
            <Link to={`/post/${cate.nameCate}`} className="topic__card--title" href="/">
              {cate.nameCate}
              <img src={cate.image} alt="no name" />
            </Link>
            <a className="topic__card--status " href="/">
              {`Threads:${cate.like}`}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostOfCate;
