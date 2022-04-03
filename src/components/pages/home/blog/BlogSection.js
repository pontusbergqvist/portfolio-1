import React from 'react';
import BlogPosts from './BlogPosts';
import Button from '../../../shared/Button';

const BlogSection = () => {
  return (
    <div className='max-w-[1400px] mx-auto text-center my-20'>
      <div className='flex items-center w-full my-5 px-5'>
        <h2 className='font-dankMono text-headingTertiary'>Recent posts</h2>
        <span className='h-[1px] ml-4 w-[30px] dark:bg-darkText block'></span>
      </div>
      <BlogPosts />
      <Button>See all posts</Button>
    </div>
  )
}

export default BlogSection;