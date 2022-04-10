import React, { useEffect, useState } from 'react';
import './scrolltotop.css';
import up from '../../static/icons/up.svg';

import Button from '../Button/Button';

const ScrollToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const scrollButton = () => {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    document.addEventListener('scroll', scrollButton);
    return () => {
      document.removeEventListener('scroll', scrollButton);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button type="button" className="back-to-top" onClick={handleScrollTop}>
          <img src={up} alt="backtotop" />
        </Button>
      )}
    </>
  );
};
export default ScrollToTopButton;
