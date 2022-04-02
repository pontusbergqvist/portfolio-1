import React, { useState, useEffect, useCallback } from 'react';
import ContentWrapper from '../providers/layout/ContentWrapper';
import ThemeWrapper from '../providers/layout/ThemeWrapper';
import Nav from './nav/Nav';
import Footer from './Footer';
import HamburgerMenu from './nav/HamburgerMenu';

// This wraps the whole page and sets colors and content width
const Layout = ({ children, currentPage, }) => {

  // Hamburger toggle:
  const [active, setActive] = useState(false);
  const setToActive = useCallback(() => setActive(!active), [active])

  useEffect(() => {
    active ?
      document.body.classList.add('hamburger-overlay-active') :
      document.body.classList.remove('hamburger-overlay-active');
  }, [active])

  return (
    <ThemeWrapper>
      <ContentWrapper>
        <Nav currentPage={currentPage} active={active} setActive={setActive} />
        {children}
        <Footer />
      </ContentWrapper>
      {active && <HamburgerMenu currentPage={currentPage} active={active} setActive={setToActive} />}
    </ThemeWrapper>
  )
}

export default Layout;