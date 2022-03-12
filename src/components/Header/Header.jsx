/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from 'react';
import './header.css';
import search from '../../image/search.svg';
import menu from '../../image/menu.svg';

const headerNav = [
  { display: 'Diễn đàn', path: '/' },
  { display: 'Thành viên', path: '/thanhvien' },
  { display: 'Chat ngẫu nhiên', path: '/chat' },
];

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const handleExpanse = () => {};
  }, []);
  const handleExpanse = () => {};
  return (
    <div ref={headerRef} className="header">
      <div className="header__container">
        <div className="header--logo">
          <span href="#">
            forum <br /> SPKT
          </span>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i}>{e.display}</li>
          ))}
        </ul>
        <div className="header__box">
          <button className="btn">Đăng nhập</button>
          <form action="/event/" method="get" className="form__search">
            <button className="btn">Search</button>
            <button type="submit" className="btn btn--search">
              <img src={search} weight="15px" height="15px" alt="icon search" />
            </button>
          </form>
        </div>
        <button type="submit" className="btn--menu" onClick={handleExpanse} o>
          <img src={menu} weight="15px" height="15px" alt="icon menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
