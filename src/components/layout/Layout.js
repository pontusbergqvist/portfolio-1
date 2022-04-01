import React, { useState, useEffect, useCallback } from 'react';
import Nav from './nav/Nav';
import Footer from './Footer';
import Overlay from './nav/Overlay';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ children, title, current, }) => {
  const [active, setActive] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const setToActive = useCallback(() => setActive(!active), [active])

  useEffect(() => {
    if (active) {
      document.body.classList.add('hamburger-overlay-active');
    } else {
      document.body.classList.remove('hamburger-overlay-active');
    }
  }, [active])

  return (
    <>
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
      <div className='bg-slate-100 dark:bg-darkBg dark:text-darkText'>
        <div className='max-w-[1920px] w-full mx-auto dontUseGalaxyFold:px-5 px-1 overflow-hidden'>
          <Overlay current={current} active={active} setActive={setToActive} />
          <Nav current={current} active={active} setActive={setActive} />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout;