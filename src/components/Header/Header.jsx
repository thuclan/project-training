/* eslint-disable no-console */
import React, { useState } from 'react';
import './header.css';
import search from '../../image/search.svg';
import menu from '../../image/menu.svg';
import close from '../../image/close.svg';

const headerNav = [
  { display: 'Diễn đàn', path: '/' },
  { display: 'Thành viên', path: '/thanhvien' },
  { display: 'Chat ngẫu nhiên', path: '/chat' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleExpanse = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className="header__container">
        <nav className={`nav ${navOpen ? 'show' : ''}`}>
          <div className="header--logo">
            <p href="#">
              forum <br /> <span>SPKT</span>
            </p>
          </div>
          <ul className="header__nav">
            {headerNav.map((e) => (
              <li key={e.display}>{e.display}</li>
            ))}
          </ul>
          <div className="header__box">
            <button className="btn" type="button">
              Đăng nhập
            </button>
            <form action="/event/" method="get" className="form__search">
              <button className="btn" type="button">
                Search
              </button>
              <button type="submit" className="btn btn--search">
                <img src={search} width="15px" height="15px" alt="icon search" />
              </button>
            </form>
          </div>
        </nav>
        <button type="button" className="btn--menu" onClick={handleExpanse}>
          <img src={menu} width="15px" height="15px" alt="icon menu" />
        </button>
        <button type="button" className="btn--close" onClick={handleExpanse}>
          <img src={close} width="15px" height="15px" alt="icon close" />
        </button>
      </div>
    </div>
  );
};

export default Header;
