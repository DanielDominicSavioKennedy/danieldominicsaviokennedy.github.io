import React, { useState, useEffect } from 'react';
import './BottomNavigation.css'; // Import CSS file for styling

function BottomNavigation() {
  const [isNavVisible, setIsNavVisible] = useState(false); // Set initial state to false
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos && currentScrollPos > 0; // Hide only when scrolling up and not at top

      setIsNavVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`bottom-navigation ${isNavVisible ? 'visible' : 'hidden'}`}>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default BottomNavigation;
