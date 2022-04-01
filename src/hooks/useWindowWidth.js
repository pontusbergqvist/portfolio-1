import { useState } from 'react';

const contextIsWindow = typeof window !== 'undefined';

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  if (contextIsWindow) {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  }
  return width >= 768 ? true : false;
}

export default useWindowWidth;