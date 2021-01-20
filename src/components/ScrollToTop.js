import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component that will scroll the window up on every navigation
const ScrollToTop = () => {
  // useLocation hook returns the location obj that represents the current URL
  const { pathname } = useLocation();

  // will run on mount and update life cycle
  // scrolls the window up every time the pathname changes
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [ pathname ],
  );

  return null;
};

export default ScrollToTop;
