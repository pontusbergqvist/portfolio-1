import React from 'react';
import Tags from '../Tags';
import Link from '../Link';

const Header = () => {
  return (
    <div className="text-primary dark:text-darkText w-full h-[calc(100vh_-_70px)] relative">
      <div className='max-w-[1400px] h-full mx-auto flex justify-between items-center px-3'>
        <div className='w-1/2 leading-[1.3] -mt-[70px]'>
          <p className='relative inline-block  after:content-[""] after:block after:w-[50px] after:dark:bg-darkText after:bg-primary after:h-[1px] after:absolute after:top-1/2 after:right-0 after:translate-x-[70px]'>Featured Project</p>
          <h2 className='font-dankMono text-heading'>Project name</h2>
          <Tags tags={['Gatsby', 'React', 'JavaScript']} />
          <Link to="">Project details</Link>
        </div>
        <img className='max-w-full h-auto -mt-[70px]' src="https://www.laralee.design/wp-content/uploads/2020/03/blog-20200309-web-design-display-1-nick-tarasov-get-over-the-fear-of-waste.jpg" alt="" />
      </div>
      <div className={`absolute bottom-0 left-16 leading-[.7]`}>
        <p className='absolute bottom-[50px] font-dankMono rotate-[270deg] right-[-15px]'>scroll</p>
        <div className={`h-[400px] w-[1px] bg-primary dark:bg-darkText flex flex-col items-center`}>
          <span className='text-red-500 mt-[100px]'>▽</span>
          <span className='text-red-500'>▽</span>
          <span className='text-red-500'>▽</span>
        </div>
      </div>
    </div>
  )
}

export default Header; 