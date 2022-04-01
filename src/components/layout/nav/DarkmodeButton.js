import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const DarkmodeButton = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          aria-hidden
          className='relative flex items-center w-[60px] h-[28px] border-2 bg-primary border-primary rounded-full cursor-pointer dark:border-darkText dark:bg-darkBg'
          onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}>
          <div className={`absolute top-1/2 translate-y-[-50%] left-[31px] text-yellow-400 ${theme === 'dark' && 'translate-x-[-27px]'}`}>
            {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
          </div>
          <div
            className={`absolute h-[28px] w-[28px] border-2 left-[-2px] bg-secondary border-primary rounded-full top-1/2 translate-y-[-50%] transition-transform duration-300 ease-out ${theme === 'dark' && 'translate-x-[32px]'} dark:bg-darkBg dark:border-darkText`}
          ></div>
        </div>
      )}
    </ThemeToggler>
  )
}

export default DarkmodeButton;