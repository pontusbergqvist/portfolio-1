import React from 'react';

// Wraps the content layout and provides the theme for the content
const ThemeWrapper = ({ children }) => {
  return (
    <div className='bg-slate-100 text-primary dark:bg-darkBg dark:text-darkText text-body font-verdana'>
      {children}
    </div>
  )
}

export default ThemeWrapper;