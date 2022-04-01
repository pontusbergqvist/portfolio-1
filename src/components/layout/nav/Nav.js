import React from 'react';
import DarkmodeButton from './DarkmodeButton';
import { Link } from 'gatsby'
import { BsFillGearFill } from 'react-icons/bs'
import HamburgerMenu from './HamburgerMenu';

const Nav = ({ current, active, setActive }) => {
  return (
    <>
      <nav className='flex justify-end md:justify-center items-center font-dankMono h-[100px] relative z-20'>
        {/* centered list with links */}
        <ul className='hidden md:flex flex-row justify-between max-w-[400px] w-[100%]'>
          <li className={`${current === 'home' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/">home</Link></li>
          <li className={`${current === 'work' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/work">work</Link></li>
          <li className={`${current === 'blog' ? 'underline underline-offset-2' : ''} mx-2 p-2`}>blog</li>
          <li className={`mx-2 p-2`}>@contact</li>
        </ul>
        {/* Darkmode  */}
        <div className={`md:left-auto md:right-0 translate-y-[-50%] md:flex items-center mx-5 z-30} ${active ? 'flex fixed top-[49px] left-0' : 'absolute top-1/2 left-0 hidden'}`}>
          <DarkmodeButton />
          <BsFillGearFill className='ml-3 cursor-pointer text-primary dark:text-darkText transition-transform ' />
        </div>
        {/* Borgir */}
        <HamburgerMenu active={active} setActive={setActive} />
      </nav >
    </>
  )
}

//${active ? 'left-0' : 'right-0 hidden absolute'}

export default Nav;