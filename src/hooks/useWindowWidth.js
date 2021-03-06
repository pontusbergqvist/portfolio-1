import { useState, useEffect } from 'react';

/**
 * This hook was made for when the hamburger menu overlay is active and the viewport width resizes to above the md-breakpoint, the overlay should disappear and the hamburger menu button should have its active state set to false. Or else the user will be stuck in the overlay with no hamburger button to toggle it off since the button uses media queries.
 * @returns boolean value if viewport width is greater than the md-breakpoint
 */
const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (contextIsWindow) {
      window.addEventListener('resize', handler);
    }
    return () => window.removeEventListener('resize', handler);
  }, [])
  return width >= 768 ? true : false;
}

const contextIsWindow = typeof window !== 'undefined';

export default useWindowWidth;