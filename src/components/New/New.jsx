import React, { useEffect, useState } from 'react';
import './new.css';
import apiConfig from '../../api/apiConfig';
import convertDate from '../../utils/ConvertDate';

const New = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewApi = async () => {
      const url = `${apiConfig.baseUrl}tag/water/post?limit=7`;
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'app-id': apiConfig.apiKey, 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setNews(data.data);
    };
    fetchNewApi();
  }, []);
  return (
    <div className="new__box">
      <div className="news">
        <h3>Bản tin</h3>
        {news.map((item) => (
          <div className="new__card" key={item.id}>
            <a className="new__card--title" href="/">
              {item.text}
            </a>
            <a className="new__card--status" href="/">
              {convertDate(item.publishDate)} &nbsp;&nbsp;&nbsp;&nbsp; Đăng bởi{' '}
              {item.owner.lastName}
            </a>
          </div>
        ))}
      </div>
      <div className="topics">
        <h3>Chủ đề</h3>
        {news.map((item) => (
          <div className="topic__card" key={item.id}>
            <a className="topic__card--title" href="/">
              {item.tags[1]}
              <img src={item.image} alt="no name" />
            </a>
            <a className="topic__card--status " href="/">{`Threads:${item.likes}`}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
