import React from 'react';
import './herocard.css';

import frame from '../../static/images/frame.png';

const HeroCard = () => (
  <div className="hero">
    <img src={frame} alt="laptop" />
    <div className="hero__content">
      <div className="text">Chào mừng đến</div>
      <h1>Diễn đàn sinh viên Đại học Sư phạm kỹ thuật TP.HCM</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus in qui fuga,
        beatae modi recusandae est perspiciatis exercitationem ipsum!
      </p>
    </div>
  </div>
);

export default HeroCard;
