import React from 'react';
import './footer.css';
import logo from '../../static/images/logo.png';
import location from '../../static/icons/location.svg';
import phone from '../../static/icons/phone.svg';
import fax from '../../static/icons/fax.svg';
import facebook from '../../static/icons/facebook.svg';
import youtube from '../../static/icons/youtube.svg';
import github from '../../static/icons/github.svg';
import instagram from '../../static/icons/instagram.svg';
import google from '../../static/icons/google.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__box">
      <div className="footer__container">
        <img src={logo} alt="logo" />
        <div className="footer__info">
          <div className="footer__location">
            <img src={location} alt="location" className="icons" />
            <span>345 Ngã ba Cây Lơn, Xa lộ Hà Nội, Dĩ An, Bình Dương, Việt Nam</span>
          </div>
          <div className="footer__phone">
            <img src={phone} alt="phone" className="icons" />
            <span>+84 378946960</span>
          </div>
          <div className="footer__fax">
            <img src={fax} alt="fax" className="icons" />
            <span>(123) 456-7890</span>
          </div>
          <div className="footer__social">
            <span>Social Media</span>
            <a href="https://www.facebook.com/profile.php?id=100074075293128">
              <img src={facebook} alt="facebook" className="icons" />
            </a>
            <a href="/">
              <img src={youtube} alt="youtube" className="icons" />
            </a>
            <a href="https://github.com/thuclan">
              <img src={github} alt="github" className="icons" />
            </a>
            <a href="https://www.instagram.com/felixalma1/">
              <img src={instagram} alt="instagram" className="icons" />
            </a>
            <a href="/">
              <img src={google} alt="google" className="icons" />
            </a>
          </div>
        </div>
      </div>
      <p>Designer by Lan dev</p>
    </div>
  </footer>
);

export default Footer;
