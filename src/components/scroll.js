import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} style={styles.button}>
        ↑
      </button>
    )
  );
};

const styles = {
  button: {
    position: 'fixed',
    bottom: '40px',
    right: '40px',
    padding: '9px 25px',
    fontSize: '36px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#6c9b31',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    zIndex: 1000,
  }
};

export default ScrollToTopButton;
