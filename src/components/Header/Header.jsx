import React, { useState } from 'react';

import './header.css';

import search from '../../static/icons/search.svg';
import menu from '../../static/icons/menu.svg';
import close from '../../static/icons/close.svg';
import logo from '../../static/images/logo.png';

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
    <header className="header">
      <div className="header__container">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className={`nav${navOpen ? ' show' : ''}`}>
          <ul className="header__nav">
            {headerNav.map((e) => (
              <li key={e.display}>
                <a href={e.path}>{e.display}</a>
              </li>
            ))}
          </ul>
          <div className="header__box">
            <button className="btn" type="button">
              Đăng nhập
            </button>
            <button className="btn" type="button">
              Search
            </button>
            <button type="submit" className="btn--search">
              <img src={search} alt="icon search" />
            </button>
          </div>
        </nav>
        <button type="button" className="btn--menu" onClick={handleExpanse}>
          <img src={navOpen ? close : menu} alt="icon menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
