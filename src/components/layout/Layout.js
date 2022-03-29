import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const Layout = ({ children, title, current, }) => {
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
      <div className='max-w-[1920px] mx-auto bg-slate-100 dark:bg-darkBg dark:text-darkText'>
        <Nav current={current} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout;