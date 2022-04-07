import React from 'react';
import './footer.css';
import logo from '../../static/images/logo.png';

import facebook from '../../static/icons/facebook.svg';
import youtube from '../../static/icons/youtube.svg';
import github from '../../static/icons/github.svg';
import twitter from '../../static/icons/twitter.svg';
import google from '../../static/icons/google.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__layout">
      <nav className="footer__nav">
        <div className="footer__nav-left">
          <ul>
            <li>Name: Mai Thuc Lan</li>
            <li>Birthday: 14/11/1998 </li>
            <li>Status: Single </li>
          </ul>
        </div>
        <div className="footer__nav-right">
          <ul>
            <li>Phone: 0378946969</li>
            <li>Job: Dev web</li>
            <li>Location: Tran Hung Dao, Di An, Binh Duong</li>
          </ul>
        </div>
      </nav>
    </div>
    <section className="footer__contact-links">
      <ul className="footer__social">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100074075293128">
            <img src={facebook} alt="facebook" className="icons" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MaiThcLn1">
            <img src={twitter} alt="twitter" className="icons" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC126W8nb44OlBxrvJdsOmHA">
            <img src={youtube} alt="youtube" className="icons" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={google} alt="google" className="icons" />
          </a>
        </li>
        <li>
          <a href="https://github.com/thuclan">
            <img src={github} alt="github" className="icons" />
          </a>
        </li>
      </ul>
    </section>
    <section className="footer__bottom">
      <div className="footer__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <p>Copyright © 2022 forumSPKT</p>
      </div>
      <div className="footer__copyright">
        <ul>
          <li>
            <a href="/">Legal Stuff</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Security</a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
);

export default Footer;
