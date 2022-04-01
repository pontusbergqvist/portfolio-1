import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Overlay = ({ active, setActive, current }) => {
  const breakpoint = useWindowWidth();
  useEffect(() => breakpoint && active && setActive(false), [breakpoint])

  return (
    <>
      <div className={`fixed md:hidden ${!active ? 'right-[-100vw]' : 'right-[0vw]'} h-screen text-headingTertiary text-right pr-5 pb-5 bg-slate-100 dark:bg-primary dark:text-darkText w-screen z-20 flex flex-col justify-end items-center`}>
        <ul className='w-full font-dankMono self-end'>
          <li onClick={() => setActive(false)} className={`${current === 'home' ? 'underline underline-offset-2' : ''} py-3`}><Link to="/">home</Link></li>
          <li onClick={() => setActive(false)} className={`${current === 'work' ? 'underline underline-offset-2' : ''} py-3`}><Link to="/work">work</Link></li>
          <li onClick={() => setActive(false)} className='py-3'>blog</li>
          <li onClick={() => setActive(false)} className='py-3'>@contact</li>
        </ul>
      </div>
    </>
  )
}

export default Overlay;