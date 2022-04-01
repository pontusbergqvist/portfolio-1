import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Overlay from './Overlay';
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
      <Overlay current={current} active={active} setActive={setActive} />
      <div className='max-w-[1920px] mx-auto bg-slate-100 dark:bg-darkBg dark:text-darkText dontUseGalaxyFold:px-5 px-1 overflow-hidden'>
        <Nav current={current} active={active} setActive={setActive} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout;