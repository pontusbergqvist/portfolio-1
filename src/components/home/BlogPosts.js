import React from 'react';
import Tags from '../Tags';

const BlogPosts = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-3 text-center text-primary'>
      <div style={{ color: 'rgba(0, 0, 0, 0)', WebkitTextStroke: "1px #343434" }} className="relative select-none pointer-events-none text-left">
        <h2 className='text-[300px] tracking-widest'>blog</h2>
        <span className='absolute font-plexSerif text-[700px] top-[-50%] right-[400px]'>“</span>
      </div>
      <div className='flex flex-col relative'>
        <article className='relative w-3/5 border text-left border-primary odd:self-end z-10 bg-slate-100 shadow-2xl my-5 mt-[-200px]'>
          <div className='p-5'>
            <p className='font-dankMono'>Dec 23, 2022</p>
            <h3 className='text-headingSecondary font-plexSerif'>Titel: Bloggpost</h3>
            <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit est maiores fuga quos, autem a repellendus quaerat dolores asperiores adipisci in dolor iure rem deleniti unde, neque repudiandae fugit!</p>
            <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          </div>
          <img src="https://images.unsplash.com/photo-1648138754675-b9918364e325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
          <div className={`absolute right-32 leading-[.7]`}>
            <div className={`h-[800px] w-[1px] bg-primary flex flex-col items-center justify-end`}>
              <span className='text-red-800'>▽</span>
              <span className='text-red-800'>▽</span>
              <span className='text-red-800 mb-[100px]'>▽</span>
            </div>
          </div>
        </article>
        <article className='w-3/5 border text-left border-primary odd:self-end z-10 bg-slate-100 shadow-2xl my-5 mt-[-200px]'>
          <div className='p-5'>
            <p className='font-dankMono'>Dec 23, 2022</p>
            <h3 className='text-headingSecondary font-plexSerif'>Titel: Bloggpost</h3>
            <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit est maiores fuga quos, autem a repellendus quaerat dolores asperiores adipisci in dolor iure rem deleniti unde, neque repudiandae fugit!</p>
            <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          </div>
          <img src="https://images.unsplash.com/photo-1648138754675-b9918364e325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
        </article>
      </div>
      <button className='border-2 font-dankMono border-primary p-3 rounded-full mt-20 mx-auto hover:underline'>See all posts</button>
    </div>
  )
}

export default BlogPosts; 