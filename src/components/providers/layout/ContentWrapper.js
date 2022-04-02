import React from 'react';

// This wraps the whole layout and sets its content container
const ContentWrapper = ({ children }) => {
  return (
    <div className='max-w-[1920px] w-full mx-auto dontUseGalaxyFold:px-5 px-1 overflow-hidden'>
      {children}
    </div>
  )
}

export default ContentWrapper;