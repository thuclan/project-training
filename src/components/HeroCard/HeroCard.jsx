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
        Nơi giao lưu, trao đổi kiến thức về lập trình giữa các bạn sinh viên trường ĐH Sư phạm Kỹ
        thuật Tp. Hồ Chí Minh!
      </p>
    </div>
  </div>
);

export default HeroCard;
