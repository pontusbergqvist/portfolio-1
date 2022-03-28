import React from 'react';
// import { Helmet } from 'react-helmet';
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, title, current }) => {
  return (
    <>
      {/* <Helmet>
        <title>{title} | Bergqvist.io</title>
      </Helmet> */}
      <div className='max-w-[1920px] mx-auto bg-slate-100'>
        <Nav current={current} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout;