import React, { useEffect, useState } from 'react';
import './new.css';
import { Link, useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import convertDate from '../../utils/ConvertDate';

export const cates = [
  {
    nameCate: 'water',
    like: 18,
    image: 'https://i.pinimg.com/236x/2d/95/fe/2d95fe29cb07a34ec2c1c3f048c58ef9.jpg',
  },
  {
    nameCate: 'ocean',
    like: 28,
    image: 'https://i.pinimg.com/236x/9d/97/9d/9d979d3b03cf230fe6cb5f0586497de2.jpg',
  },
  {
    nameCate: 'dog',
    like: 38,
    image: 'https://i.pinimg.com/236x/15/36/e7/1536e7de67f8f992c595a308ec8ae363.jpg',
  },
  {
    nameCate: 'nature',
    like: 18,
    image: 'https://i.pinimg.com/236x/01/d4/d7/01d4d71022b4872125932fe69322f31b.jpg',
  },
  {
    nameCate: 'shoreline',
    like: 28,
    image: 'https://i.pinimg.com/236x/37/b4/ca/37b4ca21fc189fecfb0bbd894f093798.jpg',
  },
  {
    nameCate: 'pool',
    like: 38,
    image: 'https://i.pinimg.com/236x/bc/50/02/bc50026964fb1ee96a0371c7e9e1ef02.jpg',
  },
];

export function getCates() {
  return cates;
}

const News = () => {
  const [news, setNews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchNewApi = async () => {
      const url = `${apiConfig.baseUrl}post?limit=20&page=1`;
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
              <span>{item.owner.lastName}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="topics">
        <h3>Chủ đề</h3>
        {cates.map((cate) => (
          <div className="topic__card" key={cate.nameCate}>
            <Link to={`/${cate.nameCate}`} className="topic__card--title" href="/">
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

export default News;
