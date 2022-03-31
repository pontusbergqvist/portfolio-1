import React from 'react';
import Tags from '../Tags';
import Button from '../Button';
import '../../styles/global.css'

const BlogPosts = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-3 text-center text-primary dark:text-darkText'>
      <h2 className='md:hidden my-20 px-5 inline-block text-left relative font-dankMono text-heading after:content-[""] after:h-1/3 after:w-full after:bg-red-400 after:block after:absolute after:bottom-0 after:right-0 z-10 after:translate-y-[-50%] after:-z-10 after:skew-x-3 after:drop-shadow-md'>blog</h2>
      <div className='hidden md:block relative text-left text-outline select-none pointer-events-none'>
        <h2 className='text-[300px] tracking-widest'>blog</h2>
        <span className='hidden grande:block absolute font-plexSerif text-[700px] top-[-50%] right-[400px]'>“</span>
      </div>
      <div className='flex flex-col mb-20'>
        <article className='relative md:w-3/5 border text-left border-primary items-center md:odd:self-end z-10 dark:border-none bg-slate-100 dark:bg-slate-700 dark:text-darkText shadow-2xl my-5 md:mt-[-200px]'>
          <div className='p-5'>
            <p className='font-dankMono'>Dec 23, 2022</p>
            <h3 className='text-headingTertiary md:text-headingSecondary font-plexSerif'>Titel: Bloggpost</h3>
            <p className='hidden md:block my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit est maiores fuga quos, autem a repellendus quaerat dolores asperiores adipisci in dolor iure rem deleniti unde, neque repudiandae fugit!</p>
            <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          </div>
          <img src="https://images.unsplash.com/photo-1648138754675-b9918364e325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
          <div className='hidden md:block absolute right-8 large:right-32 leading-[.7]'>
            <div className='h-[500px] lg:h-[800px] w-[1px] bg-primary dark:bg-darkText flex flex-col items-center justify-end'>
              <span className='text-red-500'>▽</span>
              <span className='text-red-500'>▽</span>
              <span className='text-red-500 mb-[100px]'>▽</span>
            </div>
          </div>
        </article>
        <article className='md:w-3/5 border text-left border-primary dark:border-none md:odd:self-end z-10 bg-slate-100 dark:bg-slate-700 dark:text-darkText shadow-2xl my-5 md:mt-[-200px]'>
          <div className='p-5'>
            <p className='font-dankMono'>Dec 23, 2022</p>
            <h3 className='text-headingTertiary md:text-headingSecondary font-plexSerif'>Titel: Bloggpost</h3>
            <p className='hidden md:block my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, suscipit est maiores fuga quos, autem a repellendus quaerat dolores asperiores adipisci in dolor iure rem deleniti unde, neque repudiandae fugit!</p>
            <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          </div>
          <img src="https://images.unsplash.com/photo-1648138754675-b9918364e325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
        </article>
      </div>
      <Button>See all posts</Button>
    </div>
  )
}

export default BlogPosts; 