import React, { useState } from 'react';
import Nav from './Nav'
import Footer from './Footer'
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

  return (
    <>
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
      {!active ? <div className='absolute h-screen w-screen bg-red-200 z-20'></div> : ''}
      <div className='max-w-[1920px] mx-auto bg-slate-100 dark:bg-darkBg dark:text-darkText dontUseGalaxyFeold:px-5'>
        <Nav current={current} setActive={setActive} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout;