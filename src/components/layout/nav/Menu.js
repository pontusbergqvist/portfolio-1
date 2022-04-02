import React from 'react';
import HamburgerButton from '../nav/HamburgerButton'
import { Link } from 'gatsby'

const Menu = ({ current, active, setActive }) => {
  return (
    <>
      <ul className='hidden md:flex flex-row justify-between max-w-[400px] w-[100%]'>
        <li className={`${current === 'home' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/">home</Link></li>
        <li className={`${current === 'work' ? 'underline underline-offset-2' : ''} mx-2 p-2`}><Link to="/work">work</Link></li>
        <li className={`${current === 'blog' ? 'underline underline-offset-2' : ''} mx-2 p-2`}>blog</li>
        <li className={`mx-2 p-2`}>@contact</li>
      </ul>
      <HamburgerButton active={active} setActive={setActive} />
    </>
  )
}

export default Menu;