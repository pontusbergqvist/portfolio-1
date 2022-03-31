import React from 'react';
import DarkmodeButton from './DarkmodeButton';
import { Link } from 'gatsby'
import { BsFillGearFill } from 'react-icons/bs'
import HamburgerMenu from './HamburgerMenu';

const Nav = ({ current, setActive }) => {
  return (
    <>
      <nav className='flex justify-end md:justify-center items-center font-dankMono h-[100px]'>
        <ul className='hidden md:flex flex-row justify-between max-w-[400px] w-[100%]'>
          <li className={`${current === 'home' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/">home</Link></li>
          <li className={`${current === 'work' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/work">work</Link></li>
          <li className={`${current === 'blog' ? 'underline underline-offset-2' : ''} mx-2 p-2`}>blog</li>
          <li className={`mx-2 p-2`}>@contact</li>
        </ul>
        <div className='hidden absolute right-0 md:flex items-center mr-5'>
          <DarkmodeButton />
          <BsFillGearFill className='ml-3 cursor-pointer text-primary dark:text-darkText transition-transform ' />
        </div>
        <HamburgerMenu setActive={setActive} />
      </nav >
    </>
  )
}

export default Nav;