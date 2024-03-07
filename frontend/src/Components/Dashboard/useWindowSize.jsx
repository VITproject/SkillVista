import React from 'react';
import { useState, useEffect } from 'react';

 
  const UseWindowSize = () =>  {
	return (
	  <div>
	  </div>
	);
  }

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let resizeTimer = -1;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      }, 50);
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};


export default UseWindowSize;