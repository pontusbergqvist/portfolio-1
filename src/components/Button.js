import React from 'react';
import { Link } from 'gatsby';

const Button = ({ to = "/", children }) => {
  return (
    <Link to={to}>
      <button className='border-2 font-dankMono border-primary dark:text-darkText dark:border-darkText p-3 rounded-full hover:underline'>
        {children}
      </button>
    </Link>
  )
}

export default Button;