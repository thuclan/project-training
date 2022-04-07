import React, { useState, useEffect } from 'react';
import './button.css';
import up from '../../static/icons/up.svg';

const Button = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showTopBtn && (
        <button type="button" id="back-to-top" onClick={handleScrollTop}>
          <img src={up} alt="backtotop" />
        </button>
      )}
    </div>
  );
};

export default Button;
