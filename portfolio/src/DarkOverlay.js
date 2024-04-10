import React, { useState, useEffect } from 'react';
import './DarkOverlay.css'; // Import CSS file for styling

function DarkOverlay() {
  const [isDarkOverlayVisible, setIsDarkOverlayVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollY = window.scrollY;
      const isVisible = scrollY > 0; // Show overlay when scrolled down

      setIsDarkOverlayVisible(isVisible);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`dark-overlay ${isDarkOverlayVisible ? 'visible' : 'hidden'}`} data-aos="fade-up"
    data-aos-duration="3000"></div>
  );
}

export default DarkOverlay;
