import React from 'react';
import './herocard.css';

import frame from '../../static/images/frame.png';

const HeroCard = () => (
  <div className="hero">
    <img src={frame} alt="laptop" />
    <div className="hero__content">
      <h2>Chào mừng đến </h2>
      <h1>Diễn đàn sinh viên Đại học Sư phạm kỹ thuật TP.HCM</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit . A dolor, amet placeat minus
        voluptatibus corrupti quos illum modi quasi maxime?
      </h3>
    </div>
  </div>
);

export default HeroCard;
