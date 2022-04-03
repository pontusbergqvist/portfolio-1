import React from 'react';

const BlogPost = ({ title, description, date }) => {
  return (
    <div className='max-w-[400px] mx-auto rounded-md bg-slate-200 dark:bg-slate-700 p-5'>
      <p className='font-dankMono'>{date}</p>
      <h3 className='font-plexSerif text-headingTertiary'>{title}</h3>
      <p className='text-[16px]'>{description}</p>
    </div>
  )
}

export default BlogPost;