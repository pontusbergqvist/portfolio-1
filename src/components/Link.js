import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to = "", children }) => {
  return (
    <GatsbyLink to={to}>
      <div className='font-dankMono text-link underline mt-8'>
        {children}
      </div>
    </GatsbyLink>
  )
}

export default Link;