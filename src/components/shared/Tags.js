import React from 'react';

const Tags = ({ tags }) => {
  return (
    <ul className='flex flex-wrap font-dankMono'>
      {tags && tags.map((tag, index) => <li key={index} className='px-2 border border-primary dark:border-darkText mt-3 mr-3 text-[18px]'>{tag}</li>)}
    </ul>
  )
}

export default Tags;