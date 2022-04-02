import React from 'react';
import Settings from './Settings';
import Menu from './Menu';

const Nav = ({ currentPage, active, setActive }) => {
  return (
    <>
      <nav className='flex justify-end md:justify-center items-center font-dankMono h-[100px] px-1 relative z-20'>
        <Menu currentPage={currentPage} active={active} setActive={setActive} />
        <Settings active={active} />
      </nav >
    </>
  )
}

export default Nav;