import React from 'react';

const Tags = ({ tags }) => {
  return (
    <ul className='flex flex-wrap font-dankMono'>
      {tags && tags.map((tag, index) => <li key={index} className='p-1 px-4 border border-primary dark:border-darkText mt-3 mr-3'>{tag}</li>)}
    </ul>
  )
}

export default Tags;