import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const location = useLocation();

  const scrollToElement = useCallback((hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      // Wait for the DOM to be fully rendered
      setTimeout(() => {
        scrollToElement(location.hash);
      }, 0);
    }
  }, [location.hash, scrollToElement]);
};