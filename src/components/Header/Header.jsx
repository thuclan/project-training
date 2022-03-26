import React, { useState } from 'react';

import './header.css';

import search from '../../static/I_icons/search.svg';
import menu from '../../static/I_icons/menu.svg';
import close from '../../static/I_icons/close.svg';

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
        <nav className={`nav${navOpen ? ' show' : ''}`}>
          <a href="/" className="logo">
            <p href="#">
              forum <br /> <span>SPKT</span>
            </p>
          </a>
          <ul className="header__nav">
            {headerNav.map((e) => (
              <li key={e.display}>
                <a href="/">{e.display}</a>
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
            <button type="submit" className="btn btn--search">
              <img src={search} width="15px" height="15px" alt="icon search" />
            </button>
          </div>
        </nav>
        <button type="button" className="btn--menu" onClick={handleExpanse}>
          <img src={`${navOpen ? close : menu}`} width="15px" height="15px" alt="icon menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
