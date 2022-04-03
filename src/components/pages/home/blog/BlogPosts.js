import React from 'react';
import BlogPost from './BlogPost';
import '../../../../styles/global.css'

const BlogPosts = () => {
  return (
    <div className='max-w-[1100px] p-5 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 large:grid-cols-3 justify-between text-left gap-10'>
      <BlogPost title='Titel: Bloggpost' date='Dec 23, 2021' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis.' />
      <BlogPost title='Titel: Bloggpost' date='Dec 23, 2021' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis.' />
      <BlogPost title='Titel: Bloggpost' date='Dec 23, 2021' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis.' />
      <BlogPost title='Titel: Bloggpost' date='Dec 23, 2021' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis.' />
      <BlogPost title='Titel: Bloggpost' date='Dec 23, 2021' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis.' />
    </div>
  )
}

export default BlogPosts;