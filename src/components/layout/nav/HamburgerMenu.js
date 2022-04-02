import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import useWindowWidth from '../../../hooks/useWindowWidth';

const HamburgerMenu = ({ active, setActive, current }) => {
  const breakpoint = useWindowWidth();
  useEffect(() => active && breakpoint && setActive(false), [active, breakpoint, setActive]);

  return (
    <>
      <div className={`fixed top-0 w-screen h-screen text-headingTertiary text-right pr-5 pb-5 bg-slate-100 dark:bg-primary dark:text-darkText z-10 flex flex-col justify-end items-center`}>
        <ul className='w-full font-dankMono self-end'>
          <li className={`${current === 'home' ? 'underline underline-offset-2' : ''} py-3`}><Link to="/">home</Link></li>
          <li className={`${current === 'work' ? 'underline underline-offset-2' : ''} py-3`}><Link to="/work">work</Link></li>
          <li className='py-3'>blog</li>
          <li className='py-3'>@contact</li>
        </ul>
      </div>
    </>
  )
}

export default HamburgerMenu;