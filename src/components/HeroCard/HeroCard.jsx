import React from 'react';
import './herocard.css';

import frame from '../../static/images/frame.png';

const info = {
  text: 'Chào mừng đến ',
  title: 'Diễn đàn sinh viên Đại học Sư phạm kỹ thuật TP.HCM',
  detail:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus in qui fuga, beatae modi recusandae est perspiciatis exercitationem ipsum!',
};

const HeroCard = () => (
  <div className="hero">
    <img src={frame} alt="laptop" />
    <div className="hero__content">
      <h2>{info.text}</h2>
      <h1>{info.title}</h1>
      <h3>{info.detail}</h3>
    </div>
  </div>
);

export default HeroCard;
