import React from 'react';
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, title, current, }) => {
  //   const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <title>{title} | {data.site.siteMetadata.title}</title> */}
      <div className='max-w-[1920px] mx-auto bg-slate-100'>
        <Nav current={current} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout;